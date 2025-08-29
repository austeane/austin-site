<script lang="ts">
  import VariantFrame from '$lib/components/VariantFrame.svelte';
  
  export let data: any;
  const { provider, tool } = data;
  
  const variantPath = `/variants/${tool}/enablement/index.html`;
</script>

<svelte:head>
  <title>AI Enablement - {provider.name} Variant</title>
</svelte:head>

<VariantFrame src={variantPath} title="{provider.name} Enablement Variant" />