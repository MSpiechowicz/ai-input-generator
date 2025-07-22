import { userStore } from '$lib/stores/userStore.svelte';
import type { TopicType } from '$lib/types/topicType';

const configModules = import.meta.glob('./prompts/*/config.json', { eager: true });

const markdownModules = import.meta.glob('./prompts/**/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

const logoModules = import.meta.glob('./prompts/*/logo.svg', {
	eager: true,
	query: '?raw',
	import: 'default'
});

const projectConfigs: Record<string, TopicType> = {};

// Load project configurations
for (const [path, module] of Object.entries(configModules)) {
	// Extract project ID from path: './prompts/svelte/config.json' -> 'svelte'
	const projectId = path.split('/')[2];
	const config = (module as { default: TopicType }).default;

	// Ensure the config has an id property
	projectConfigs[projectId] = {
		...config,
		id: projectId
	};
}

// Add logos to project configs where available
for (const [path, logoContent] of Object.entries(logoModules)) {
	// Extract project ID from path: './prompts/svelte/logo.svg' -> 'svelte'
	const projectId = path.split('/')[2];
	if (projectConfigs[projectId]) {
		projectConfigs[projectId].logo = logoContent as string;
	}
}

// Process markdown files into organized structure
const promptContent: Record<string, Record<string, string>> = {};

for (const [path, content] of Object.entries(markdownModules)) {
	// Extract project ID and filename from path: './prompts/svelte/svelte5-core-rules.md' -> ['svelte', 'svelte5-core-rules.md']
	const pathParts = path.split('/');
	const projectId = pathParts[2];
	const filename = pathParts[3];

	if (!promptContent[projectId]) {
		promptContent[projectId] = {};
	}

	promptContent[projectId][filename] = content as string;
}

// Function to get all topic IDs and populate userStore.topics
export function initializeTopics(): void {
	const topicIds = Object.keys(projectConfigs);
	const topics: TopicType[] = topicIds.map(id => projectConfigs[id]);

	// Populate the userStore with the topics
	userStore.topics = topics;
	userStore.filteredTopics = topics;
}

// Export project types array
export const projectTypesArray: TopicType[] = Object.values(projectConfigs);

// Function to combine prompt files for a project
function combinePromptFiles(projectId: string): string {
	const config = projectConfigs[projectId];
	if (!config || !config.promptFiles) {
		return '';
	}

	const projectPrompts = promptContent[projectId] || {};
	const combinedContent: string[] = [];

	for (const file of config.promptFiles) {
		if (projectPrompts[file]) {
			combinedContent.push(projectPrompts[file]);
		}
	}

	return combinedContent.join('\n\n---\n\n');
}

// Generate prompt with folder-based system
export function generatePrompt(projectTypes: string | string[], userInput: string): string {
	// Handle both single and multiple project types
	const types = Array.isArray(projectTypes) ? projectTypes : [projectTypes];

	if (types.length === 1) {
		// Single project type
		const projectId = types[0];
		const config = projectConfigs[projectId];

		if (!config) {
			return `Context: ${projectId} project\nTask: ${userInput}\n\nPlease provide a detailed, production-ready solution with best practices and clear explanations.`;
		}

		// Load and combine all prompt files for this project
		const combinedPrompt = combinePromptFiles(projectId);

		if (!combinedPrompt) {
			return `Context: ${config.name} project\nTask: ${userInput}\n\nPlease provide a detailed, production-ready solution with best practices and clear explanations.`;
		}

		return `${combinedPrompt}

Context: Working on a ${config.name} project
Task: ${userInput}

Please provide a complete, production-ready solution following the guidelines above.`;
	} else {
		// Multiple project types - combine contexts
		const combinedContext = types
			.map((type) => {
				const config = projectConfigs[type];
				return config?.name || type;
			})
			.join(' + ');

		const specificRequirements: string[] = [];

		for (const type of types) {
			const config = projectConfigs[type];
			if (config) {
				const promptContent = combinePromptFiles(type);
				if (promptContent) {
					specificRequirements.push(`## ${config.name} Guidelines\n${promptContent}`);
				}
			}
		}

		return `You are an expert developer with deep knowledge across multiple domains: ${combinedContext}.

${specificRequirements.join('\n\n')}

Context: Working on a project that combines ${combinedContext}
Task: ${userInput}

Please provide a comprehensive solution that addresses all aspects:

General requirements:
- Ensure seamless integration between different technologies/domains
- Follow best practices for each area while maintaining overall coherence
- Consider how different aspects influence each other
- Provide clear explanations for cross-domain decisions
- Include proper error handling and validation across all areas
- Consider scalability and maintainability for the combined solution

Focus on creating a cohesive solution that leverages the strengths of each domain while addressing potential integration challenges.`;
	}
}
