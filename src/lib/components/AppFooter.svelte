<script lang="ts">
	const footerContent: { label: string; link: string | null }[] = [
		{
			label: 'BUILT WITH SVELTE 5',
			link: 'https://svelte.dev/'
		},
		{
			label: '•',
			link: null
		},
		{
			label: 'MADE BY MACIEJ SPIECHOWICZ',
			link: 'https://mspiechowicz.com'
		}
	];
</script>

<footer class="bg-black text-white">
	<div class="p-6">
		<div class="flex flex-col md:flex-row items-center justify-center gap-2">
			{#each footerContent as item, index (index)}
				{#if item.link}
					<a
						href={item.link}
						target="_blank"
						class="cursor-pointer font-bold tracking-wider uppercase hover:underline hover:underline-offset-4"
					>
						{item.label}
					</a>
				{:else}
					<p class="font-bold tracking-wider uppercase hidden md:block">{item.label}</p>
				{/if}
			{/each}
		</div>
	</div>
</footer>
