<script lang="ts">
  import VariantFrame from '$lib/components/VariantFrame.svelte';
  
  export let data: any;
  
  // Reactive so it updates on param changes
  $: provider = data.provider;
  $: tool = data.tool;
  $: variantPath = `/variants/${tool}/enablement/index.html`;
</script>

<svelte:head>
  {#if provider?.name}
    <title>AI Enablement - {provider.name} Variant</title>
  {/if}
</svelte:head>

{#key tool}
  <VariantFrame src={variantPath} />
{/key}