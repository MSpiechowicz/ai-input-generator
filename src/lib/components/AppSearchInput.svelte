<script lang="ts">
	import { userStore } from '$lib/stores/userStore.svelte';

	function clearSelection() {
		userStore.selectedTopics = [];
		userStore.output = '';
		userStore.input = '';
	}

	function clearSearch() {
		userStore.searchQuery = '';
		userStore.defaultTopicCount = 6;
	}

	function getBrutalistTransitionClass() {
		return userStore.selectedTopics.length > 0 ? 'brutalism-transition' : '';
	}

	function getBrutalistOpacityClass() {
		return userStore.selectedTopics.length === 0 ? 'opacity-50' : '';
	}
</script>

<div class="mb-6">
	<div class="flex flex-col gap-4 md:flex-row">
		<div class="relative flex-1">
			<label for="search-input" class="sr-only">Search project types</label>
			<input
				id="search-input"
				type="text"
				class="brutalism brutalism-shadow-medium focus:ring-accent-tertiary w-full bg-white py-3 !pr-20 !pl-4 focus:ring-2 focus:ring-offset-2 focus:outline-none"
				placeholder="SEARCH TOPICS..."
				bind:value={userStore.searchQuery}
				aria-label="Search project types"
			/>
			{#if userStore.searchQuery}
				<button
					type="button"
					class="brutalism brutalism-shadow-medium brutalism-transition bg-button-red absolute top-2 right-4 h-6 w-6 p-3 font-bold focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
					onclick={clearSearch}
					aria-label="Clear search"
				>
					X
				</button>
			{/if}
		</div>
		<button
			type="button"
			class="brutalism brutalism-shadow-medium {getBrutalistTransitionClass()} {getBrutalistOpacityClass()} bg-button-red px-4 py-2 font-bold text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
			onclick={clearSelection}
			disabled={userStore.selectedTopics.length === 0}
			aria-label="Clear all selected topics"
		>
			CLEAR ALL
		</button>
	</div>
</div>
