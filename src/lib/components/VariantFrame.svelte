<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let src: string;

  /**
   * Fixed-height mode (default): the iframe fills its wrapper.
   * We keep an optional autosize path in case you ever want it back,
   * but it's OFF by default and we ignore variant postMessages.
   */
  export let autosize = false;

  /** Optional max content width in pixels (centered). If null => full width. */
  export let maxWidth: number | null = null;

  // Internal height string used only when autosize === true
  let heightCss = '100%';
  let lastH = 0;

  function onMessage(e: MessageEvent) {
    if (!autosize) return;
    const d = e?.data as any;
    if (!d || typeof d !== 'object') return;
    if (d.type === 'variant:height') {
      const h = Number(d.value);
      if (!Number.isNaN(h) && h > 300 && Math.abs(h - lastH) > 2) {
        lastH = h;
        heightCss = `${h}px`;
      }
    }
  }

  onMount(() => {
    if (autosize) window.addEventListener('message', onMessage);
  });
  onDestroy(() => {
    if (autosize) window.removeEventListener('message', onMessage);
  });
</script>

<style>
  .frame-wrap { 
    display: block; 
    width: 100%; 
    height: 100%; /* wrapper needs height too */
  }
  .frame {
    display: block;
    width: 100%;
    height: 100%; /* fixed-height mode: fill wrapper */
    border: none;
    background: #fff;
  }
</style>

<div
  class="frame-wrap"
  style={`max-width:${maxWidth ? maxWidth + 'px' : '100%'}; margin-inline:auto;`}
>
  <iframe
    title="Variant preview"
    {src}
    class="frame"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
    style={`height:${autosize ? heightCss : '100%'};`}
  ></iframe>
</div>