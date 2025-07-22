<script lang="ts">
  let { title, description } = $props();
</script>

<div class="mb-6 flex flex-col gap-0">
  <h2 class="text-3xl font-extrabold mb-3">{title}</h2>
  <p class="font-bold text-lg">{description}</p>
</div>
