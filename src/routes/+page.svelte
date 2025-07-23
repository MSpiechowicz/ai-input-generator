<script lang="ts">
	import AppFooter from '$lib/components/AppFooter.svelte';
	import AppHeader from '$lib/components/AppHeader.svelte';
	import AppInput from '$lib/components/AppInput.svelte';
	import AppOutput from '$lib/components/AppOutput.svelte';
	import AppProgressIndicator from '$lib/components/AppProgressIndicator.svelte';
	import AppProjectsSelector from '$lib/components/AppProjectsSelector.svelte';
	import { userStore } from '$lib/stores/userStore.svelte';
</script>

<svelte:head>
	<title>AI Input Generator - Transform Your Prompts</title>
	<meta
		name="description"
		content="Transform basic requests into professional AI prompts with expert templates for different project types."
	/>
</svelte:head>

<div class="min-h-screen">
	<a
		href="#main-content"
		class="focus:bg-accent sr-only uppercase focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:font-bold focus:text-black"
	>
		SKIP TO MAIN CONTENT
	</a>
	<AppHeader />
	<AppProgressIndicator />

	<main id="main-content">
		<div class="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
			<div class="flex flex-col gap-12">
				<AppProjectsSelector />
			</div>
			<div class="flex flex-1 flex-col">
				<AppInput />
				<div aria-live="polite" aria-atomic="true" class="sr-only">
					{#if userStore.input && userStore.output && userStore.selectedTopics.length > 0}
						Generated prompt is ready
					{/if}
				</div>
				{#if userStore.input && userStore.output && userStore.selectedTopics.length > 0}
					<AppOutput />
				{/if}
			</div>
		</div>
	</main>

	<AppFooter />
</div>
