<script lang="ts">
	import { userStore } from '$lib/stores/userStore.svelte';
	import AppSectionHeader from './AppSectionHeader.svelte';

	let textareaElement: HTMLTextAreaElement;

	const prompt = $derived(userStore.output);
</script>

<section class="mt-8">
	<AppSectionHeader title="GENERATED PROMPT" description="YOUR ENHANCED, PROFESSIONAL AI PROMPT" />

	<div class="flex flex-1 flex-col gap-6">
		<textarea
			bind:this={textareaElement}
			id="generated-prompt"
			class="brutalism brutalism-shadow-medium min-h-[534px] w-full p-4"
			value={prompt}
			readonly
			rows="20"
			aria-label="Generated AI prompt - click to select all"
		></textarea>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<button
				class="brutalism brutalism-shadow-medium brutalism-transition bg-accent-tertiary h-14 w-full font-bold !text-white"
				onclick={() => {
					userStore.promptCopied = true;
					navigator.clipboard.writeText(prompt);
					setTimeout(() => {
						userStore.promptCopied = false;
					}, 2000);
				}}
			>
				{userStore.promptCopied ? '✓ PROMPT COPIED!' : 'COPY TO CLIPBOARD'}
			</button>

			<button
				class="brutalism brutalism-shadow-medium brutalism-transition bg-accent h-14 w-full font-bold"
				onclick={() => {
					textareaElement.select();
				}}
			>
				SELECT ALL TEXT
			</button>
		</div>
	</div>
</section>
