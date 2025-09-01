<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { PROVIDERS } from '$lib/providers';
  import VariantFrame from '$lib/components/VariantFrame.svelte';

  export let data: { provider: any; providers: typeof PROVIDERS };

  // Make these reactive to route param changes
  $: p = data.provider;
  $: providers = data.providers;
  $: idx = providers.findIndex((x) => x.id === p?.id);

  // Standard max width for all variants
  const frameMax = 2000;

  function navigate(id: string) {
    goto(id === 'minimal' ? '/' : `/with/${id}`);
  }

  // Keyboard: [ ] to cycle through variants
  function onKey(e: KeyboardEvent) {
    if (!p) return;
    if (e.key === ']') {
      const next = providers[(idx + 1) % providers.length];
      navigate(next.id);
    } else if (e.key === '[') {
      const prev = providers[(idx - 1 + providers.length) % providers.length];
      navigate(prev.id);
    }
  }

  onMount(() => {
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
</script>

<svelte:head>
  {#if p?.noindex}<meta name="robots" content="noindex, nofollow" />{/if}
  {#if p?.path}<link rel="prefetch" href={p.path} />{/if}
</svelte:head>

{#if !p}
  <div style="text-align: center; padding: 3rem;">
    <h1>Unknown provider</h1>
    <p>This variant doesn't exist yet.</p>
    <a href="/" style="color: var(--accent);">← Back to minimal version</a>
  </div>
{:else}
  {#if p.id === 'minimal'}
    <p style="text-align: center; padding: 2rem; color: var(--muted);">
      This route is for AI-generated variants. The minimal version is shown on the home page.
    </p>
  {:else}
    <!-- Fixed-height wrapper: iframe scrollbars are OK -->
    <div style="position: relative; height: calc(100vh - 200px); min-height: 600px;">
      {#key p.id}
        <VariantFrame src={p.path} maxWidth={frameMax} autosize={false} />
      {/key}
    </div>
    <p style="text-align: center; margin-top: 1rem; color: var(--muted); font-size: 0.85rem;">
      Tip: Use [ and ] keys to cycle through variants
    </p>
  {/if}
{/if}

