<script lang="ts">
  import type { ComponentType, SvelteComponent } from 'svelte';
  import type { PostMetadata } from './+page';

  export let data: {
    content: ComponentType<SvelteComponent>;
    metadata: PostMetadata;
  };

  function formatDate(dateStr: string): string {
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<svelte:head>
  <title>{data.metadata.title} — Austin Wallace</title>
  <meta name="description" content={data.metadata.description} />
</svelte:head>

<article class="blog-post">
  <header class="post-header">
    <a href="/blog" class="back-link">&larr; Back to blog</a>
    <h1>{data.metadata.title}</h1>
    <time datetime={data.metadata.date}>{formatDate(data.metadata.date)}</time>
  </header>

  {#if data.metadata.image}
    <figure class="hero-image">
      <img
        src={data.metadata.image}
        alt={data.metadata.imageAlt || data.metadata.title}
        decoding="async"
      />
    </figure>
  {/if}

  <div class="prose">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  .blog-post {
    max-width: min(1100px, 100%);
    margin: 0 auto;
  }

  .post-header {
    margin-bottom: 1.5rem;
    max-width: 85ch;
    margin-left: auto;
    margin-right: auto;
  }

  .post-header h1 {
    font-size: clamp(2rem, 3vw, 2.75rem);
    line-height: 1.15;
    margin: 0.5rem 0 0.25rem 0;
  }

  .post-header time {
    color: var(--muted);
  }

  .back-link {
    color: var(--muted);
    font-size: 0.9rem;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 0.5rem;
    transition: color 0.2s;
  }

  .back-link:hover {
    color: var(--fg);
  }

  .hero-image {
    margin: 0 0 2rem 0;
    border-radius: 8px;
    overflow: hidden;
  }

  .hero-image img {
    width: 100%;
    height: auto;
    display: block;
  }

  .prose {
    font-size: 1.05rem;
    max-width: 85ch;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    .prose {
      font-size: 1.125rem;
    }
  }

  .prose :global(h1),
  .prose :global(h2),
  .prose :global(h3),
  .prose :global(h4) {
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    line-height: 1.3;
    scroll-margin-top: 2rem;
  }

  .prose :global(h2) {
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border);
  }

  .prose :global(h3) {
    font-size: 1.25rem;
  }

  .prose :global(p) {
    margin: 1rem 0;
    line-height: 1.7;
  }

  .prose :global(ul),
  .prose :global(ol) {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  .prose :global(li) {
    margin: 0.5rem 0;
    line-height: 1.7;
  }

  .prose :global(pre) {
    background: var(--bg-code, #0b1021);
    color: var(--fg-code, #e6edf3);
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 1rem 1.25rem;
    border-radius: 10px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin: 1.5rem 0;
  }

  .prose :global(code) {
    font-family: ui-monospace, monospace;
    font-size: 0.9em;
  }

  .prose :global(pre code) {
    background: transparent;
    color: inherit;
    padding: 0;
  }

  .prose :global(:not(pre) > code) {
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid var(--border);
    padding: 0.15em 0.35em;
    border-radius: 6px;
    overflow-wrap: anywhere;
  }

  .prose :global(blockquote) {
    border-left: 3px solid var(--border);
    padding-left: 1rem;
    margin: 1.5rem 0;
    color: var(--muted);
    font-style: italic;
  }

  .prose :global(a) {
    color: var(--accent, #0066cc);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
    overflow-wrap: anywhere;
  }

  .prose :global(a:hover) {
    text-decoration-thickness: 2px;
  }

  .prose :global(hr) {
    margin: 2rem 0;
    border: 0;
    border-top: 1px solid var(--border);
  }

  .prose :global(table) {
    width: 100%;
    border-collapse: collapse;
    display: block;
    overflow-x: auto;
    max-width: 100%;
    margin: 1.5rem 0;
    -webkit-overflow-scrolling: touch;
  }

  .prose :global(th),
  .prose :global(td) {
    border: 1px solid var(--border);
    padding: 0.5rem 0.75rem;
    text-align: left;
    vertical-align: top;
  }

  .prose :global(th) {
    background: rgba(0, 0, 0, 0.02);
    font-weight: 600;
  }

  .prose :global(img) {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1.5rem auto;
    display: block;
  }

  .prose :global(strong) {
    font-weight: 600;
  }
</style>
