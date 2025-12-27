<script lang="ts">
  import { onMount } from 'svelte';
  import VariantFrame from '$lib/components/VariantFrame.svelte';

  export let data: any;

  // Reactive so it updates on param changes
  $: provider = data.provider;
  $: tool = data.tool;
  $: enablement = data.enablement;
  $: variantPath = `/variants/${tool}/enablement/index.html`;

  const frameMax = 2000;

  // For minimal enablement page
  let expandedSections: Record<string, boolean> = {};
  let currentHash = '';

  onMount(() => {
    if (tool === 'minimal' && typeof window !== 'undefined') {
      if (window.location.hash) {
        currentHash = window.location.hash.slice(1);
        expandSection(currentHash);
        setTimeout(() => {
          document.getElementById(currentHash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }

      window.addEventListener('hashchange', () => {
        currentHash = window.location.hash.slice(1);
        expandSection(currentHash);
      });
    }
  });

  function expandSection(id: string) {
    if (!enablement) return;
    const section = enablement.sections.find((s: any) => {
      if (s.id === id) return true;
      if (s.type === 'accordion' && s.items) {
        return s.items.some((item: any, idx: number) => `${s.id}-${idx}` === id);
      }
      return false;
    });

    if (section) {
      expandedSections[section.id] = true;
      if (section.type === 'accordion') {
        const itemIdx = id.split('-').pop();
        if (itemIdx) {
          expandedSections[id] = true;
        }
      }
    }
  }

  function toggleSection(id: string) {
    expandedSections[id] = !expandedSections[id];
  }

  function copyLink(id: string) {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
  }

  $: tocSections = enablement ? [
    ...enablement.value_props.map((vp: any) => ({
      id: vp.id,
      title: vp.title,
      level: 2
    })),
    ...enablement.sections.map((s: any) => ({
      id: s.id,
      title: s.title,
      level: 2,
      items: s.type === 'accordion' ? s.items?.map((item: any, idx: number) => ({
        id: `${s.id}-${idx}`,
        title: item.label,
        level: 3
      })) : undefined
    }))
  ] : [];
</script>

<svelte:head>
  {#if provider?.name}
    <title>AI Enablement - {provider.name} Variant</title>
  {/if}
  {#if tool === 'minimal'}
    <meta name="description" content="Practical AI enablement for engineering teams: policy, training, tooling, and governance to safely scale AI usage across your org." />
  {/if}
</svelte:head>

{#if tool === 'minimal' && enablement}
  <!-- Minimal enablement rendered directly -->
  <style>
    .enablement-container {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    @media (max-width: 768px) {
      .enablement-container {
        grid-template-columns: 1fr;
        padding: 1rem;
      }

      .toc-desktop {
        display: none;
      }
    }

    @media (min-width: 769px) {
      .toc-mobile {
        display: none;
      }
    }

    .toc {
      position: sticky;
      top: 2rem;
      height: fit-content;
      max-height: calc(100vh - 4rem);
      overflow-y: auto;
    }

    .toc h3 {
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 0.75rem;
      color: var(--muted);
    }

    .toc-list, .toc-sublist {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .toc-sublist {
      margin-left: 1rem;
    }

    .toc-item {
      margin-bottom: 0.5rem;
    }

    .toc-item.level-3 {
      margin-left: 1rem;
      font-size: 0.875rem;
    }

    .toc-link {
      color: var(--muted);
      text-decoration: none;
      display: block;
      padding: 0.25rem 0;
      transition: color 0.2s;
    }

    .toc-link:hover {
      color: var(--text);
    }

    .toc-link.active {
      color: var(--text);
      font-weight: 500;
    }

    .hero {
      margin-bottom: 3rem;
    }

    .hero h1 {
      font-size: 2.5rem;
      line-height: 1.1;
      margin-bottom: 0.5rem;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: var(--muted);
      margin-bottom: 1.5rem;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-block;
      padding: 0.5rem 1rem;
      border: 1px solid var(--border);
      border-radius: 4px;
      text-decoration: none;
      transition: background-color 0.2s;
    }

    .btn-primary {
      background: var(--text);
      color: var(--bg);
    }

    .btn-primary:hover {
      opacity: 0.9;
    }

    .btn-secondary:hover {
      background: var(--border);
    }

    .value-props {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .value-prop {
      border: 1px solid var(--border);
      padding: 1.5rem;
      border-radius: 4px;
    }

    .value-prop h3 {
      font-size: 1.125rem;
      margin-bottom: 0.75rem;
    }

    .value-prop ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .value-prop li {
      margin-bottom: 0.5rem;
      padding-left: 1.25rem;
      position: relative;
    }

    .value-prop li::before {
      content: "→";
      position: absolute;
      left: 0;
      color: var(--muted);
    }

    .section {
      margin-bottom: 3rem;
    }

    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .section-title {
      font-size: 1.5rem;
      margin: 0;
    }

    .copy-link {
      padding: 0.25rem 0.5rem;
      background: none;
      border: 1px solid var(--border);
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.875rem;
      color: var(--muted);
      transition: color 0.2s;
    }

    .copy-link:hover {
      color: var(--text);
      border-color: var(--text);
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .card {
      border: 1px solid var(--border);
      padding: 1.5rem;
      border-radius: 4px;
    }

    .card h4 {
      margin-bottom: 0.75rem;
    }

    .card-body {
      margin-bottom: 1rem;
      color: var(--muted);
    }

    .deliverables {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .deliverables li {
      padding: 0.25rem 0;
      padding-left: 1.25rem;
      position: relative;
    }

    .deliverables li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--muted);
    }

    .accordion {
      border: 1px solid var(--border);
      border-radius: 4px;
      overflow: hidden;
    }

    .accordion-item {
      border-bottom: 1px solid var(--border);
    }

    .accordion-item:last-child {
      border-bottom: none;
    }

    .accordion-header {
      padding: 1rem 1.5rem;
      background: none;
      border: none;
      width: 100%;
      text-align: left;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background-color 0.2s;
    }

    .accordion-header:hover {
      background: var(--border);
    }

    .accordion-icon {
      transition: transform 0.2s;
    }

    .accordion-icon.expanded {
      transform: rotate(90deg);
    }

    .accordion-content {
      padding: 0 1.5rem;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out, padding 0.3s ease-out;
    }

    .accordion-content.expanded {
      padding: 1rem 1.5rem;
      max-height: 500px;
    }

    .process-steps {
      list-style: none;
      padding: 0;
      margin: 0;
      counter-reset: step;
    }

    .process-step {
      padding: 0.75rem 0;
      padding-left: 2rem;
      position: relative;
      counter-increment: step;
    }

    .process-step::before {
      content: counter(step);
      position: absolute;
      left: 0;
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid var(--text);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .resources {
      margin-bottom: 3rem;
    }

    .resource-list {
      display: grid;
      gap: 1rem;
    }

    .resource {
      border: 1px solid var(--border);
      padding: 1rem;
      border-radius: 4px;
    }

    .resource-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 0.5rem;
    }

    .resource-title {
      font-weight: 500;
      text-decoration: none;
      color: var(--text);
    }

    .resource-title:hover {
      text-decoration: underline;
    }

    .resource-kind {
      font-size: 0.75rem;
      text-transform: uppercase;
      padding: 0.125rem 0.5rem;
      border: 1px solid var(--border);
      border-radius: 999px;
      color: var(--muted);
    }

    .resource-notes {
      color: var(--muted);
      font-size: 0.875rem;
    }

    .cta {
      text-align: center;
      padding: 3rem 2rem;
      border: 1px solid var(--border);
      border-radius: 4px;
      background: var(--border);
    }

    .cta h2 {
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
    }

    .cta-subhead {
      color: var(--muted);
      margin-bottom: 1.5rem;
    }
  </style>

  <div class="enablement-container">
    <nav class="toc toc-desktop" aria-label="Table of contents">
      <h3>On this page</h3>
      <ul class="toc-list">
        {#each tocSections as section}
          <li class="toc-item level-{section.level}">
            <a href="#{section.id}" class="toc-link" class:active={currentHash === section.id}>
              {section.title}
            </a>
            {#if section.items}
              <ul class="toc-sublist">
                {#each section.items as item}
                  <li class="toc-item level-{item.level}">
                    <a href="#{item.id}" class="toc-link" class:active={currentHash === item.id}>
                      {item.title}
                    </a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>

    <div class="toc-mobile">
      <details>
        <summary style="padding: 0.5rem; border: 1px solid var(--border); border-radius: 4px; cursor: pointer;">
          On this page
        </summary>
        <ul class="toc-list" style="margin-top: 0.5rem;">
          {#each tocSections as section}
            <li class="toc-item level-{section.level}">
              <a href="#{section.id}" class="toc-link">
                {section.title}
              </a>
            </li>
          {/each}
        </ul>
      </details>
    </div>

    <main>
      <section class="hero">
        <h1>{enablement.hero.title}</h1>
        <p class="hero-subtitle">{enablement.hero.subtitle}</p>
        <div class="hero-actions">
          <a href={enablement.hero.primary_cta.href} class="btn btn-primary">
            {enablement.hero.primary_cta.label}
          </a>
          <a href={enablement.hero.secondary_cta.href} class="btn btn-secondary">
            {enablement.hero.secondary_cta.label}
          </a>
        </div>
      </section>

      <section class="value-props">
        {#each enablement.value_props as prop}
          <div class="value-prop" id={prop.id}>
            <h3>{prop.title}</h3>
            <ul>
              {#each prop.bullets as bullet}
                <li>{bullet}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </section>

      {#each enablement.sections as section}
        <section class="section" id={section.id}>
          <div class="section-header">
            <h2 class="section-title">{section.title}</h2>
            <button class="copy-link" on:click={() => copyLink(section.id)} title="Copy link to section">
              Copy link
            </button>
          </div>

          {#if section.type === 'cards'}
            <div class="cards">
              {#each section.cards as card}
                <div class="card">
                  <h4>{card.title}</h4>
                  <p class="card-body">{card.body}</p>
                  {#if card.deliverables}
                    <ul class="deliverables">
                      {#each card.deliverables as deliverable}
                        <li>{deliverable}</li>
                      {/each}
                    </ul>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}

          {#if section.type === 'text'}
            {#each section.body as paragraph}
              <p>{@html paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
            {/each}
          {/if}

          {#if section.type === 'bullets'}
            <ul>
              {#each section.bullets as bullet}
                <li>{@html bullet.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>
              {/each}
            </ul>
          {/if}

          {#if section.type === 'accordion'}
            {#if section.intro}
              <p>{section.intro}</p>
            {/if}
            <div class="accordion">
              {#each section.items as item, idx}
                {@const itemId = `${section.id}-${idx}`}
                <div class="accordion-item">
                  <button
                    class="accordion-header"
                    id={itemId}
                    on:click={() => toggleSection(itemId)}
                  >
                    <span>{item.label}</span>
                    <span class="accordion-icon" class:expanded={expandedSections[itemId]}>
                      ▶
                    </span>
                  </button>
                  <div class="accordion-content" class:expanded={expandedSections[itemId]}>
                    <ul>
                      {#each item.content as line}
                        <li>{@html line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>
                      {/each}
                    </ul>
                  </div>
                </div>
              {/each}
            </div>
          {/if}

          {#if section.type === 'process'}
            <ol class="process-steps">
              {#each section.steps as step}
                <li class="process-step">{step}</li>
              {/each}
            </ol>
          {/if}
        </section>
      {/each}

      {#if enablement.resources?.length}
        <section class="resources">
          <h2>Resources</h2>
          <div class="resource-list">
            {#each enablement.resources as resource}
              <div class="resource">
                <div class="resource-header">
                  <a href={resource.url} class="resource-title" target="_blank" rel="noopener noreferrer">
                    {resource.title}
                  </a>
                  <span class="resource-kind">{resource.kind}</span>
                </div>
                {#if resource.notes}
                  <p class="resource-notes">{resource.notes}</p>
                {/if}
              </div>
            {/each}
          </div>
        </section>
      {/if}

      {#if enablement.cta}
        <section class="cta">
          <h2>{enablement.cta.headline}</h2>
          <p class="cta-subhead">{enablement.cta.subhead}</p>
          <div class="hero-actions" style="justify-content: center;">
            {#each enablement.cta.actions as action}
              <a href={action.href} class="btn btn-primary">
                {action.label}
              </a>
            {/each}
          </div>
        </section>
      {/if}
    </main>
  </div>
{:else}
  {#key tool}
    <!-- Fixed-height wrapper: keeps the variant's viewport stable; scrollbars inside iframe -->
    <div style="position: relative; height: calc(100vh - 200px); min-height: 600px;">
      <VariantFrame src={variantPath} maxWidth={frameMax} autosize={false}/>
    </div>
  {/key}
{/if}
