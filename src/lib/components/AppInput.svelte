<script lang="ts">
	import { userStore } from '$lib/stores/userStore.svelte';
	import AppSectionHeader from './AppSectionHeader.svelte';

	//function handleInput(event: Event) {
	//	const target = event.target as HTMLTextAreaElement;
	//	onChange(target.value);
	//}

	let { disabled } = $props();
</script>

<section>
	<AppSectionHeader
		title="ENTER YOUR REQUEST"
		description="DESCRIBE WHAT YOU WANT TO BUILD OR ACCOMPLISH"
	/>

	<div>
		<textarea
			class="brutalism brutalism-shadow-medium w-full bg-white p-4 font-bold {disabled
				? 'opacity-50'
				: ''}"
			placeholder={disabled
				? 'SELECT AT LEAST ONE PROJECT TYPE FIRST...'
				: 'EXAMPLE: BUILD A TODO APP WITH DRAG-AND-DROP, DARK MODE, AND CLOUD SYNC'}
			bind:value={userStore.input}
			{disabled}
			rows="8"
			aria-label="Enter your project request"
		></textarea>
	</div>
</section>
