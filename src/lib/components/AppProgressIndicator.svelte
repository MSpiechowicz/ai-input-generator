<script lang="ts">
	import { userStore } from '$lib/stores/userStore.svelte';

	const steps = $derived([
		{
			label: 'SELECT TOPICS',
			active: true
		},
		{
			label: 'ENTER PROMPT',
			active: userStore.selectedTopics.length > 0
		},
		{
			label: 'COPY RESULT',
			active: userStore.promptCopied
		}
	]);
</script>

<section class="bg-accent border-primary border-y-4 p-4">
	<div class="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
		{#each steps as step, index (step.label)}
			<div class="flex flex-col lg:flex-row items-center justify-center gap-4">
				<div
					class="brutalism brutalism-shadow-medium w-10 bg-white px-3 py-1 text-lg font-bold {step.active
						? '!bg-accent-tertiary !text-white'
						: ''}"
				>
					{index + 1}
				</div>
				<span class="text-lg font-bold">{step.label}</span>
			</div>
			{#if index < steps.length - 1}
				<div class="w-1.5 h-10 md:h-1.5 md:w-15 bg-black"></div>
			{/if}
		{/each}
	</div>
</section>
