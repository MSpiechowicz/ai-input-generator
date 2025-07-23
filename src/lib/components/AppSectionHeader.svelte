<script lang="ts">
	let { title, description } = $props();
</script>

<div class="mb-6 flex flex-col gap-0">
	<h2 class="mb-3 text-3xl font-extrabold">{title}</h2>
	<p class="text-lg font-bold" id="section-description-{title.toLowerCase().replace(/\s+/g, '-')}">
		{description}
	</p>
</div>
