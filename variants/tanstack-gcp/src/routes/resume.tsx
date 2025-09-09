import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useMemo, useState } from 'react';

export const Route = createFileRoute('/resume')({
  component: MinimalResume,
});

type Resume = {
  basics: {
    name: string;
    label: string;
    website?: string;
    email?: string;
    location?: { city?: string };
    profiles?: { network: string; url: string }[];
    summary?: string;
  };
  work: { name: string; position: string; startDate?: string; endDate?: string; summary?: string; highlights?: string[] }[];
  projects?: { name: string; description?: string; url?: string; keywords?: string[] }[];
  skills?: { name: string; keywords?: string[] }[];
};

function MinimalResume() {
  const [data, setData] = useState<Resume | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const url = (import.meta as any).env?.VITE_DATA_URL || '/data/resume.json';
    fetch(url, { headers: { Accept: 'application/json' } })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setData)
      .catch((e) => setErr(e.message));
  }, []);

  const basics = data?.basics;
  const work = data?.work ?? [];
  const projects = data?.projects ?? [];
  const skills = data?.skills ?? [];
  const contacts = useMemo(() => {
    const items: { label: string; url: string | null }[] = [];
    if (basics?.website) items.push({ label: 'Website', url: basics.website });
    if (basics?.email) items.push({ label: basics.email, url: `mailto:${basics.email}` });
    if (basics?.location?.city) items.push({ label: basics.location.city, url: null });
    const gh = basics?.profiles?.find((p) => p.network?.toLowerCase() === 'github');
    const li = basics?.profiles?.find((p) => p.network?.toLowerCase() === 'linkedin');
    if (gh) items.push({ label: 'GitHub', url: gh.url });
    if (li) items.push({ label: 'LinkedIn', url: li.url });
    return items;
  }, [basics]);

  if (err) {
    return <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}><p>Failed to load resume: {err}</p></div>;
  }
  if (!data) return <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}><p>Loading…</p></div>;

  return (
    <div style={{ padding: '1.25rem', maxWidth: 2000, margin: '0 auto' }}>
      <section aria-labelledby="title">
        <h1 id="title" style={{ fontSize: '2rem', lineHeight: 1.1, margin: '.25rem 0 .5rem 0' }}>
          {basics?.name || 'Your Name'}
        </h1>
        <p style={{ margin: 0, color: '#666' }}>{basics?.label || 'AI Engineer · AI Enablement Specialist'}</p>
        {!!contacts.length && (
          <ul style={{ listStyle: 'none', padding: 0, margin: '.75rem 0 0 0', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {contacts.map((c, i) => (
              <li key={i}>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer">{c.label}</a>
                ) : (
                  <span>{c.label}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      <hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />

      {basics?.summary && (
        <section aria-labelledby="summary">
          <h2 id="summary" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Summary</h2>
          <p style={{ margin: 0, maxWidth: '70ch' }}>{basics.summary}</p>
        </section>
      )}

      {basics?.summary && (<hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />)}

      {!!work.length && (
        <section aria-labelledby="work">
          <h2 id="work" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Experience</h2>
          {work.map((job, i) => (
            <article key={i} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <div>
                  <strong>{job.position}</strong>{' @ '}{job.name}
                </div>
                <div style={{ color: '#666' }}>
                  {job.startDate}{job.endDate ? ` – ${job.endDate}` : ' – Present'}
                </div>
              </div>
              {job.summary && <p style={{ margin: '.25rem 0 0 0', maxWidth: '70ch' }}>{job.summary}</p>}
              {!!job.highlights?.length && (
                <ul style={{ margin: '.25rem 0 0 1rem' }}>
                  {job.highlights.map((h, j) => (<li key={j}>{h}</li>))}
                </ul>
              )}
            </article>
          ))}
        </section>
      )}

      {!!work.length && (<hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />)}

      {!!projects.length && (
        <section aria-labelledby="projects">
          <h2 id="projects" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Projects</h2>
          <ul style={{ listStyle: 'disc', margin: '.25rem 0 0 1rem' }}>
            {projects.map((p, i) => (
              <li key={i}>
                <strong>{p.name}</strong>
                {p.url && (
                  <>
                    {' '}— <a href={p.url} target="_blank" rel="noopener noreferrer">{p.url}</a>
                  </>
                )}
                {p.description && (<div style={{ margin: '.25rem 0 0 0', maxWidth: '70ch' }}>{p.description}</div>)}
                {!!p.keywords?.length && (
                  <div style={{ color: '#666', fontSize: '.9rem', marginTop: '.25rem' }}>{p.keywords.join(' · ')}</div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {!!projects.length && (<hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />)}

      {!!skills.length && (
        <section aria-labelledby="skills">
          <h2 id="skills" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Skills</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
            {skills.map((s, i) => (
              <li key={i} style={{ border: '1px solid #eee', padding: '.25rem .5rem', borderRadius: '999px' }}>
                {s.name}{s.keywords?.length ? ` — ${s.keywords.join(', ')}` : ''}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
