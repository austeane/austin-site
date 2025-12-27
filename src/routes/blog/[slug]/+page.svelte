<script lang="ts">
  import type { ComponentType, SvelteComponent } from 'svelte';
  import type { PostMetadata } from './+page';

  export let data: {
    content: ComponentType<SvelteComponent>;
    metadata: PostMetadata;
  };

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
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
    <time>{formatDate(data.metadata.date)}</time>
  </header>

  {#if data.metadata.image}
    <figure class="hero-image">
      <img src={data.metadata.image} alt={data.metadata.imageAlt || data.metadata.title} />
    </figure>
  {/if}

  <div class="prose">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  .blog-post {
    max-width: 70ch;
    margin: 0 auto;
  }

  .post-header {
    margin-bottom: 1.5rem;
  }

  .post-header h1 {
    font-size: 2rem;
    line-height: 1.2;
    margin: 0.5rem 0;
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

  .prose :global(h1),
  .prose :global(h2),
  .prose :global(h3),
  .prose :global(h4) {
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    line-height: 1.3;
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
    background: var(--bg-code, #1e1e1e);
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1.5rem 0;
  }

  .prose :global(code) {
    font-family: ui-monospace, monospace;
    font-size: 0.9em;
  }

  .prose :global(p code) {
    background: var(--bg-code, #1e1e1e);
    padding: 0.2em 0.4em;
    border-radius: 4px;
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
  }

  .prose :global(a:hover) {
    text-decoration-thickness: 2px;
  }

  .prose :global(hr) {
    margin: 2rem 0;
    border: 0;
    border-top: 1px solid var(--border);
  }

  .prose :global(img) {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1.5rem 0;
  }

  .prose :global(strong) {
    font-weight: 600;
  }
</style>
