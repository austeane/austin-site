<script lang="ts">
  import type { Post } from './+page';

  export let data: { posts: Post[] };

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<svelte:head>
  <title>Blog — Austin Wallace</title>
  <meta name="description" content="Blog posts by Austin Wallace" />
</svelte:head>

<div class="blog-listing">
  <header class="page-header">
    <h1>Blog</h1>
    <p>Thoughts on data engineering, AI, and software development.</p>
  </header>

  {#if data.posts.length === 0}
    <p class="empty-state">No posts yet. Check back soon!</p>
  {:else}
    <ul class="posts-list">
      {#each data.posts as post}
        <li>
          <a href="/blog/{post.slug}" class="post-link">
            <article class="post-card" class:has-image={post.metadata.image}>
              {#if post.metadata.image}
                <div class="post-image">
                  <img src={post.metadata.image} alt={post.metadata.imageAlt || post.metadata.title} />
                </div>
              {/if}
              <div class="post-content">
                <h2>{post.metadata.title}</h2>
                <time>{formatDate(post.metadata.date)}</time>
                {#if post.metadata.description}
                  <p>{post.metadata.description}</p>
                {/if}
              </div>
            </article>
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .blog-listing {
    max-width: 70ch;
    margin: 0 auto;
  }

  .page-header {
    margin-bottom: 2rem;
  }

  .page-header h1 {
    font-size: 2rem;
    line-height: 1.1;
    margin: 0 0 0.5rem 0;
  }

  .page-header p {
    margin: 0;
    color: var(--muted);
  }

  .empty-state {
    color: var(--muted);
    text-align: center;
    padding: 3rem 0;
  }

  .posts-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .post-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .post-card {
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .post-card:hover {
    border-color: var(--accent, #666);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  .post-card.has-image {
    display: grid;
    grid-template-columns: 200px 1fr;
  }

  .post-image {
    overflow: hidden;
    background: #f0f0f0;
  }

  .post-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

  .post-card:hover .post-image img {
    transform: scale(1.05);
  }

  .post-content {
    padding: 1.25rem;
  }

  .post-content h2 {
    font-size: 1.25rem;
    margin: 0 0 0.5rem 0;
    line-height: 1.3;
  }

  .post-content time {
    color: var(--muted);
    font-size: 0.85rem;
  }

  .post-content p {
    margin: 0.75rem 0 0 0;
    color: var(--muted);
    line-height: 1.5;
    font-size: 0.95rem;
  }

  @media (max-width: 600px) {
    .post-card.has-image {
      grid-template-columns: 1fr;
    }

    .post-image {
      height: 160px;
    }
  }
</style>
