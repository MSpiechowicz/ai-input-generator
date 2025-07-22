<script lang="ts">
	import AppHeader from '$lib/components/AppHeader.svelte';
	import AppInput from '$lib/components/AppInput.svelte';
	import AppOutput from '$lib/components/AppOutput.svelte';
	import AppProgressIndicator from '$lib/components/AppProgressIndicator.svelte';
	import AppProjectsSelector from '$lib/components/AppProjectsSelector.svelte';

	import { generatePrompt } from '$lib/prompts.svelte';
	import { userStore } from '$lib/stores/userStore.svelte';

	let generatedPrompt = '';
	let copied = false;

	const currentPrompt = $derived(
		generatePrompt(
			userStore.selectedTopics.map((topic) => topic.id),
			userStore.input
		)
	);

	async function copyToClipboard() {
		if (currentPrompt) {
			await navigator.clipboard.writeText(currentPrompt);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		}
	}
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

	<main class="section-brutalist">
		<div class="container-brutalist">
			<div class="grid-2">
				<div class="flex flex-col gap-12">
					<AppProjectsSelector />
				</div>
				<div>
					<AppInput disabled={userStore.selectedTopics.length === 0} />
					<AppOutput prompt={currentPrompt} {copied} onCopy={copyToClipboard} />
				</div>
			</div>
		</div>
	</main>

	<!-- Footer -->
	<footer style="background-color: black; color: white;">
		<div class="container-brutalist" style="padding: 32px 20px;">
			<div class="text-center">
				<p style="font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em;">
					BUILT WITH SVELTE 5 • MADE BY MACIEJ SPIECHOWICZ
				</p>
			</div>
		</div>
	</footer>
</div>
