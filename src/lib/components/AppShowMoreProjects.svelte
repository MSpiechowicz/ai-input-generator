<script lang="ts">
	import { userStore } from '$lib/stores/userStore.svelte';

	let { hasMoreProjects, showMoreProjects, totalFilteredCount } = $props();
</script>

{#if hasMoreProjects}
	<div class="mt-6 text-center">
		<button
			type="button"
			class="brutalism brutalism-shadow-medium brutalism-transition bg-accent-tertiary h-14 w-full p-4 font-bold !text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
			onclick={showMoreProjects}
			aria-label="Show more project types"
		>
			SHOW {Math.min(6, totalFilteredCount - userStore.defaultTopicCount)} MORE ({totalFilteredCount -
				userStore.defaultTopicCount} REMAINING)
		</button>
	</div>
{/if}
