<script lang="ts">
	import { userStore } from '$lib/stores/userStore.svelte';

	let { hasMoreProjects, showMoreProjects, totalFilteredCount } = $props();
</script>

{#if hasMoreProjects}
	<div class="mt-6 text-center">
		<button
			type="button"
			class="brutalism brutalism-shadow-medium brutalism-transition bg-accent-tertiary w-full p-4 h-14 font-bold !text-white"
			onclick={showMoreProjects}
		>
			SHOW {Math.min(6, totalFilteredCount - userStore.defaultTopicCount)} MORE ({totalFilteredCount -
				userStore.defaultTopicCount} REMAINING)
		</button>
	</div>
{/if}
