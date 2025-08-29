<script lang="ts">
  import VariantFrame from '$lib/components/VariantFrame.svelte';
  
  export let data: any;
  const { provider, tool } = data;
  
  const variantPath = `/variants/${tool}/enablement/index.html`;
</script>

<svelte:head>
  <title>AI Enablement - {provider.name} Variant</title>
</svelte:head>

<div class="variant-notice">
  <p>Viewing <strong>{provider.name}</strong> variant of the enablement page</p>
  <a href="/enablement">← Back to standard version</a>
</div>

<VariantFrame src={variantPath} title="{provider.name} Enablement Variant" />

<style>
  .variant-notice {
    padding: 1rem;
    background: var(--border);
    border-bottom: 1px solid var(--muted);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .variant-notice p {
    margin: 0;
  }
  
  .variant-notice a {
    text-decoration: none;
    color: var(--muted);
  }
  
  .variant-notice a:hover {
    color: var(--text);
  }
</style>