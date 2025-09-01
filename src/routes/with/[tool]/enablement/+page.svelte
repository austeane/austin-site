<script lang="ts">
  import VariantFrame from '$lib/components/VariantFrame.svelte';
  
  export let data: any;
  
  // Reactive so it updates on param changes
  $: provider = data.provider;
  $: tool = data.tool;
  $: variantPath = `/variants/${tool}/enablement/index.html`;

  const frameMax = 2000;
</script>

<svelte:head>
  {#if provider?.name}
    <title>AI Enablement - {provider.name} Variant</title>
  {/if}
</svelte:head>

{#key tool}
  <!-- Fixed-height wrapper: keeps the variant's viewport stable; scrollbars inside iframe -->
  <div style="position: relative; height: calc(100vh - 200px); min-height: 600px;">
    <VariantFrame src={variantPath} maxWidth={frameMax} autosize={false}/>
  </div>
{/key}