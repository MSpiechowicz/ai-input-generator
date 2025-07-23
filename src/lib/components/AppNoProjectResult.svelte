<script lang="ts">
	let { totalFilteredCount } = $props();
</script>

{#if totalFilteredCount === 0}
	<div class="brutalism brutalism-shadow-medium bg-accent w-full p-4 font-bold" role="alert" aria-live="polite">
		<div class="flex gap-3 w-full">
			<span class="text-xl" aria-hidden="true">🔍</span>
			<div>
				<h3 class="text-xl font-bold mb-2">NO PROJECTS FOUND</h3>
				<p class="text-sm">
					TRY A DIFFERENT SEARCH TERM OR CLEAR THE SEARCH
				</p>
			</div>
		</div>
	</div>
{/if}
