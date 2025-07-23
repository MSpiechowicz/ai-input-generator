<script lang="ts">
	import { userStore } from '$lib/stores/userStore.svelte';

	let { projectsToDisplay, toggleTopic } = $props();
</script>

<div class="grid gap-4">
	{#each projectsToDisplay as [key, project] (key)}
		<button
			type="button"
			class="brutalism brutalism-shadow-medium brutalism-transition focus:ring-accent-tertiary relative min-w-full focus:ring-2 focus:ring-offset-2 focus:outline-none {userStore.selectedTopics.includes(
				project
			)
				? 'bg-accent'
				: ''} p-4"
			onclick={() => toggleTopic(project)}
			aria-pressed={userStore.selectedTopics.includes(project)}
			aria-label="Select {project.name} topic"
		>
			<div class="flex w-full flex-col text-left">
				<div class="flex items-center gap-3">
					{#if project.logo}
						<div class="h-8 w-8 [&>svg]:h-8 [&>svg]:w-8">
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html project.logo}
						</div>
					{/if}
					<h3 class="text-xl font-bold">{String(project.name).toUpperCase()}</h3>
				</div>
				<div class="mt-4 flex flex-wrap gap-3">
					{#each project.keywords.slice(0, 4) as keyword (keyword)}
						<div class="brutalism brutalism-shadow-small bg-white p-1">
							<span class="text-sm font-bold">{String(keyword).toUpperCase()}</span>
						</div>
					{/each}
				</div>
				{#if userStore.selectedTopics.includes(project)}
					<div class="absolute top-3 right-3" aria-hidden="true">
						<div class="text-2xl font-bold">✓</div>
					</div>
				{/if}
			</div>
		</button>
	{/each}
</div>
