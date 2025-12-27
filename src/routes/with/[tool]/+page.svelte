<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { PROVIDERS } from '$lib/providers';
  import VariantFrame from '$lib/components/VariantFrame.svelte';

  export let data: { provider: any; providers: typeof PROVIDERS; resume: any };

  // Make these reactive to route param changes
  $: p = data.provider;
  $: providers = data.providers;
  $: resume = data.resume;
  $: idx = providers.findIndex((x) => x.id === p?.id);

  // Standard max width for all variants
  const frameMax = 2000;

  function navigate(id: string) {
    goto(`/with/${id}`);
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

  // Contact links for minimal resume
  $: contactLinks = resume ? [
    resume.basics?.website && { label: 'Website', url: resume.basics.website },
    resume.basics?.email && { label: resume.basics.email, url: `mailto:${resume.basics.email}` },
    resume.basics?.location?.city && { label: resume.basics.location.city, url: null },
    resume.basics?.profiles?.find((p:any)=>p.network?.toLowerCase()==='github') && {
      label: 'GitHub',
      url: resume.basics.profiles.find((p:any)=>p.network?.toLowerCase()==='github').url
    },
    resume.basics?.profiles?.find((p:any)=>p.network?.toLowerCase()==='linkedin') && {
      label: 'LinkedIn',
      url: resume.basics.profiles.find((p:any)=>p.network?.toLowerCase()==='linkedin').url
    }
  ].filter(Boolean) as {label:string,url:string|null}[] : [];
</script>

<svelte:head>
  {#if p?.noindex}<meta name="robots" content="noindex, nofollow" />{/if}
  {#if p?.path && p.id !== 'minimal'}<link rel="prefetch" href={p.path} />{/if}
  {#if p?.id === 'minimal'}
    <title>Austin Wallace — Data Engineer (Databricks/Snowflake/dbt)</title>
    <meta name="description" content="Data Engineer with 9+ years building Databricks/Snowflake/dbt platforms, AI enablement leader, and builder of reliable data pipelines." />
  {/if}
</svelte:head>

{#if !p}
  <div style="text-align: center; padding: 3rem;">
    <h1>Unknown provider</h1>
    <p>This variant doesn't exist yet.</p>
    <a href="/" style="color: var(--accent);">← Back to home</a>
  </div>
{:else if p.id === 'minimal'}
  <!-- Minimal resume rendered directly -->
  <section aria-labelledby="title">
    <h1 id="title" style="font-size:2rem;line-height:1.1;margin:.25rem 0 .5rem 0;">
      {resume.basics?.name || 'Your Name'}
    </h1>
    <p style="margin:0;color:var(--muted);">{resume.basics?.label || 'AI Engineer · AI Enablement Specialist'}</p>
    {#if contactLinks.length}
      <ul style="list-style:none;padding:0;margin:.75rem 0 0 0;display:flex;gap:1rem;flex-wrap:wrap;">
        {#each contactLinks as c}
          <li>
            {#if c.url}
              <a href={c.url} target="_blank" rel="noopener noreferrer">{c.label}</a>
            {:else}
              <span>{c.label}</span>
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
  </section>

  <hr style="margin:1.25rem 0;border:0;border-top:1px solid var(--border);" />

  {#if resume.basics?.summary}
    <section aria-labelledby="summary">
      <h2 id="summary" style="font-size:1rem;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.5rem;">Summary</h2>
      <p style="margin:0;max-width:70ch;">{resume.basics.summary}</p>
    </section>

    <hr style="margin:1.25rem 0;border:0;border-top:1px solid var(--border);" />
  {/if}

  {#if resume.work?.length}
    <section aria-labelledby="work">
      <h2 id="work" style="font-size:1rem;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.5rem;">Experience</h2>
      {#each resume.work as job (job.name + job.position)}
        <article style="margin-bottom:1rem;">
          <div style="display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;">
            <div>
              <strong>{job.position}</strong>{' @ '}{job.name}
            </div>
            <div style="color:var(--muted);">
              {job.startDate}{job.endDate ? ` – ${job.endDate}` : ' – Present'}
            </div>
          </div>
          {#if job.summary}<p style="margin:.25rem 0 0 0;max-width:70ch;">{job.summary}</p>{/if}
          {#if job.highlights?.length}
            <ul style="margin:.25rem 0 0 1rem;">
              {#each job.highlights as h}<li>{h}</li>{/each}
            </ul>
          {/if}
        </article>
      {/each}
    </section>

    <hr style="margin:1.25rem 0;border:0;border-top:1px solid var(--border);" />
  {/if}

  {#if resume.projects?.length}
    <section aria-labelledby="projects">
      <h2 id="projects" style="font-size:1rem;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.5rem;">Projects</h2>
      <ul style="list-style:disc;margin:.25rem 0 0 1rem;">
        {#each resume.projects as project}
          <li>
            <strong>{project.name}</strong>{project.url ? ' — ' : ''}{#if project.url}<a rel="noopener noreferrer" target="_blank" href={project.url}>{project.url}</a>{/if}
            {#if project.description}<div style="margin:.25rem 0 0 0;max-width:70ch;">{project.description}</div>{/if}
            {#if project.keywords?.length}<div style="color:var(--muted);font-size:.9rem;margin-top:.25rem;">{project.keywords.join(' · ')}</div>{/if}
          </li>
        {/each}
      </ul>
    </section>

    <hr style="margin:1.25rem 0;border:0;border-top:1px solid var(--border);" />
  {/if}

  {#if resume.skills?.length}
    <section aria-labelledby="skills">
      <h2 id="skills" style="font-size:1rem;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.5rem;">Skills</h2>
      <ul style="list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:.5rem;">
        {#each resume.skills as s}
          <li style="border:1px solid var(--border);padding:.25rem .5rem;border-radius:999px;">
            {s.name}{s.keywords?.length ? ` — ${s.keywords.join(', ')}` : ''}
          </li>
        {/each}
      </ul>
    </section>
  {/if}

  <p style="text-align: center; margin-top: 2rem; color: var(--muted); font-size: 0.85rem;">
    Tip: Use [ and ] keys to cycle through variants
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
