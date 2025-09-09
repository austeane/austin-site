<script lang="ts">
  export let data: any;
  const resume = data.resume;

  const contactLinks = [
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
  ].filter(Boolean) as {label:string,url:string|null}[];

  function downloadPDF() {
    window.print();
  }
</script>

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
      {#each resume.projects as p}
        <li>
          <strong>{p.name}</strong>{p.url ? ' — ' : ''}{#if p.url}<a rel="noopener noreferrer" target="_blank" href={p.url}>{p.url}</a>{/if}
          {#if p.description}<div style="margin:.25rem 0 0 0;max-width:70ch;">{p.description}</div>{/if}
          {#if p.keywords?.length}<div style="color:var(--muted);font-size:.9rem;margin-top:.25rem;">{p.keywords.join(' · ')}</div>{/if}
        </li>
      {/each}
    </ul>
  </section>

  <hr style="margin:1.25rem 0;border:0;border-top:1px solid var(--border);" />
{/if}

<svelte:head>
  <title>Austin Wallace — Data Engineer (Databricks/Snowflake/dbt)</title>
  <meta name="description" content="Data Engineer with 9+ years building Databricks/Snowflake/dbt platforms, AI enablement leader, and builder of reliable data pipelines." />
  <link rel="canonical" href="https://www.austinwallace.ca/" />
  <meta property="og:title" content="Austin Wallace — Data Engineer" />
  <meta property="og:description" content="Data Engineer with 9+ years building Databricks/Snowflake/dbt platforms and AI enablement." />
  <meta property="og:url" content="https://www.austinwallace.ca/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.austinwallace.ca/og-image.svg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://www.austinwallace.ca/og-image.svg" />
  
  <!-- JSON-LD Person Schema -->
  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": resume.basics?.name || "Austin Wallace",
    "jobTitle": resume.basics?.label || "Data Engineer",
    "email": resume.basics?.email ? `mailto:${resume.basics.email}` : undefined,
    "url": "https://www.austinwallace.ca/",
    "sameAs": [
      resume.basics?.profiles?.find((p:any) => p.network?.toLowerCase() === 'github')?.url,
      resume.basics?.profiles?.find((p:any) => p.network?.toLowerCase() === 'linkedin')?.url
    ].filter(Boolean),
    "address": resume.basics?.location?.city ? {
      "@type": "PostalAddress",
      "addressLocality": resume.basics.location.city
    } : undefined
  })}</script>`}
</svelte:head>

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
