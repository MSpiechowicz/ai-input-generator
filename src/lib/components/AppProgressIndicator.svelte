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

<section
	class="bg-accent border-primary border-y-4 p-4"
	role="progressbar"
	aria-label="Progress through the AI prompt generation process"
	aria-valuenow={steps.filter((s) => s.active).length}
	aria-valuemin="1"
	aria-valuemax="3"
>
	<div class="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
		{#each steps as step, index (step.label)}
			<div class="flex flex-col items-center justify-center gap-4 lg:flex-row">
				<div
					class="brutalism brutalism-shadow-medium w-10 bg-white px-3 py-1 text-lg font-bold {step.active
						? '!bg-accent-tertiary !text-white'
						: ''}"
					aria-current={step.active ? 'step' : undefined}
				>
					{index + 1}
				</div>
				<span class="text-lg font-bold">{step.label}</span>
			</div>
			{#if index < steps.length - 1}
				<div class="h-10 w-1.5 bg-black md:h-1.5 md:w-15" aria-hidden="true"></div>
			{/if}
		{/each}
	</div>
</section>
