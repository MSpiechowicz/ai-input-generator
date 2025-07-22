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

	<textarea
		class="brutalism brutalism-shadow-medium w-full bg-white p-4 font-bold {disabled
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
	></textarea>
</section>
