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
			class="brutalism brutalism-shadow-medium focus:ring-accent-tertiary min-h-[534px] w-full p-4 focus:ring-2 focus:ring-offset-2 focus:outline-none"
			value={prompt}
			readonly
			rows="20"
			aria-label="Generated AI prompt - click to select all"
			aria-describedby="prompt-instructions"
		></textarea>
		<div id="prompt-instructions" class="sr-only">
			Generated AI prompt. Use the buttons below to copy or select all text.
		</div>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<button
				class="brutalism brutalism-shadow-medium brutalism-transition bg-accent-tertiary h-14 w-full font-bold !text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
				onclick={() => {
					userStore.promptCopied = true;
					navigator.clipboard.writeText(prompt);
					setTimeout(() => {
						userStore.promptCopied = false;
					}, 2000);
				}}
				aria-label="Copy generated prompt to clipboard"
			>
				{userStore.promptCopied ? '✓ PROMPT COPIED!' : 'COPY TO CLIPBOARD'}
			</button>

			<button
				class="brutalism brutalism-shadow-medium brutalism-transition bg-accent focus:ring-accent-tertiary h-14 w-full font-bold focus:ring-2 focus:ring-offset-2 focus:outline-none"
				onclick={() => {
					textareaElement.select();
				}}
				aria-label="Select all text in the generated prompt"
			>
				SELECT ALL TEXT
			</button>
		</div>
	</div>
</section>
