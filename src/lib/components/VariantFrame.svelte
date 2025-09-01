<script lang="ts">
  import { onMount } from 'svelte';
  export let src: string;
  // Good default while waiting for the variant to report its real height:
  let height = 'clamp(480px, 70svh, 1200px)';

  let lastReceivedHeight = 0;
  
  function onMessage(e: MessageEvent) {
    const d = e?.data;
    if (d && typeof d === 'object' && d.type === 'variant:height') {
      const h = Number(d.value);
      // Only update if height is valid and significantly different
      if (!Number.isNaN(h) && h > 300 && Math.abs(h - lastReceivedHeight) > 5) {
        lastReceivedHeight = h;
        height = `${h}px`;
      }
    }
  }

  onMount(() => {
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  });
</script>

<iframe
  title="Variant preview"
  {src}
  style={`width:100%;height:${height};border:none;background:#fff;display:block;`}
  loading="lazy"
  sandbox="allow-scripts allow-same-origin"
></iframe>