<script lang="ts">
	import AppHeader from '$lib/components/AppHeader.svelte';
	import AppInput from '$lib/components/AppInput.svelte';
	import AppOutput from '$lib/components/AppOutput.svelte';
	import AppProgressIndicator from '$lib/components/AppProgressIndicator.svelte';
	import AppProjectsSelector from '$lib/components/AppProjectsSelector.svelte';







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
					<AppInput />
					<AppOutput />
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
