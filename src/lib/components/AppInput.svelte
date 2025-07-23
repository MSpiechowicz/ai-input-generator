<script lang="ts">
	import { generatePrompt } from '$lib/prompts.svelte';
	import { userStore } from '$lib/stores/userStore.svelte';
	import AppSectionHeader from './AppSectionHeader.svelte';

	const disabled = $derived(userStore.selectedTopics.length === 0);
</script>

<section>
	<AppSectionHeader
		title="ENTER YOUR REQUEST"
		description="DESCRIBE WHAT YOU WANT TO BUILD OR ACCOMPLISH"
	/>

	<label for="project-request" class="sr-only">Enter your project request</label>
	<textarea
		id="project-request"
		class="brutalism brutalism-shadow-medium focus:ring-accent-tertiary w-full bg-white p-4 font-bold focus:ring-2 focus:ring-offset-2 focus:outline-none {disabled
			? 'opacity-50'
			: ''}"
		placeholder={disabled
			? 'SELECT AT LEAST ONE PROJECT TYPE FIRST...'
			: 'EXAMPLE: BUILD A TODO APP WITH DRAG-AND-DROP, DARK MODE, AND CLOUD SYNC'}
		bind:value={userStore.input}
		{disabled}
		rows="8"
		oninput={() => {
			userStore.output = generatePrompt(
				userStore.selectedTopics.map((topic) => topic.id),
				userStore.input
			);
		}}
		aria-label="Enter your project request"
		aria-describedby="request-instructions"
	></textarea>
	<div id="request-instructions" class="sr-only">
		Describe what you want to build or accomplish. Select at least one project type first.
	</div>
</section>
