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
	<AppHeader />
	<AppProgressIndicator />

	<main>
			<div class="grid grid-cols-1 md:grid-cols-2 p-8 gap-8">
				<div class="flex flex-col gap-12">
					<AppProjectsSelector />
				</div>
				<div class="flex flex-col flex-1">
					<AppInput />
					{#if userStore.input && userStore.output && userStore.selectedTopics.length > 0}
						<AppOutput />
					{/if}
				</div>
			</div>
	</main>

  <AppFooter />
</div>
