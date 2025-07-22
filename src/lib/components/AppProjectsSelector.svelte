<script lang="ts">
	import { generatePrompt, initializeTopics } from '$lib/prompts.svelte';
	import { userStore } from '$lib/stores/userStore.svelte';

	import AppNoProjectResult from './AppNoProjectResult.svelte';
	import AppProjects from './AppProjects.svelte';
	import AppSearchInput from './AppSearchInput.svelte';
	import AppSectionHeader from './AppSectionHeader.svelte';
	import AppShowMoreProjects from './AppShowMoreProjects.svelte';

	import type { TopicType } from '$lib/types/topicType';

	$effect(() => {
		initializeTopics();
	});

	const projectsToDisplay = $derived(
		Object.entries(userStore.filteredTopics).slice(0, userStore.defaultTopicCount)
	);

	const hasMoreProjects = $derived(
		Object.keys(userStore.filteredTopics).length > userStore.defaultTopicCount
	);

	const totalFilteredCount = $derived(Object.keys(userStore.filteredTopics).length);

	function toggleTopic(project: TopicType) {
		if (userStore.selectedTopics.includes(project)) {
			// Remove from selection
			const newSelection = userStore.selectedTopics.filter((p) => p !== project);
			userStore.selectedTopics = newSelection;
			userStore.output = generatePrompt(
				userStore.selectedTopics.map((topic) => topic.id),
				userStore.input
			);
		} else {
			// Add to selection
			const newSelection = [...userStore.selectedTopics, project];
			userStore.selectedTopics = newSelection;
			userStore.output = generatePrompt(
				userStore.selectedTopics.map((topic) => topic.id),
				userStore.input
			);
		}
	}

	function showMoreProjects() {
		userStore.defaultTopicCount += userStore.topicCountIncrement;
	}

	$effect(() => {
		if (userStore.searchQuery.trim() === '') {
			userStore.filteredTopics = userStore.topics;
		} else {
			const query = userStore.searchQuery.toLowerCase();
			userStore.filteredTopics = userStore.topics.filter(
				(topic) =>
					topic.name.toLowerCase().includes(query) ||
					topic.description.toLowerCase().includes(query) ||
					topic.keywords.some((keyword) => keyword.toLowerCase().includes(query)) ||
					topic.id.toLowerCase().includes(query)
			);
		}
	});

	// Reset pagination when search changes
	$effect(() => {
		if (userStore.searchQuery) {
			userStore.defaultTopicCount = 6;
		}
	});
</script>

<section>
	<AppSectionHeader
		title="CHOOSE TOPIC AREAS"
		description="SELECT ONE OR MORE TOPICS FOR YOUR REQUEST"
	/>

	<AppSearchInput />
	<AppProjects {projectsToDisplay} {toggleTopic} />
	<AppShowMoreProjects {hasMoreProjects} {showMoreProjects} {totalFilteredCount} />
	<AppNoProjectResult {totalFilteredCount} />
</section>
