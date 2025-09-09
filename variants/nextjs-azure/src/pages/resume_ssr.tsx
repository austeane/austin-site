import { useEffect, useMemo, useState } from 'react';
import type { GetServerSidePropsContext } from 'next';

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

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  // Use relative path through Next.js rewrite to avoid WAF blocking
  // The rewrite in next.config.mjs maps /azure/next/data/* to the origin
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers.host || process.env.VERCEL_URL || 'localhost:3000';
  const url = `${protocol}://${host}/azure/next/data/resume.json`;
  
  try {
    const res = await fetch(url, { 
      headers: { 
        Accept: 'application/json'
      } 
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const data = await res.json();
    
    return { 
      props: { data }
    };
  } catch (e) {
    console.error('[resume_ssr] Error fetching data:', e);
    // Return empty props to allow client-side fallback
    return { 
      props: { error: `Server fetch failed: ${(e as Error).message}` }
    };
  }
}

export default function ResumeSSR({ data, error }: { data?: Resume; error?: string }) {
  const [clientData, setClientData] = useState<Resume | undefined>(data);
  const [clientError, setClientError] = useState<string | undefined>(error);

  useEffect(() => {
    // Fallback: if SSR failed, fetch through Next.js rewrite
    if (!clientData) {
      const tryFetch = async () => {
        // Use the rewrite path that maps to the origin's /data/resume.json
        const r = await fetch('/azure/next/data/resume.json', { headers: { Accept: 'application/json' } });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const json = (await r.json()) as Resume;
        setClientData(json);
        setClientError(undefined);
      };
      tryFetch().catch((e) => setClientError(e.message || 'Fetch failed'));
    }
  }, [clientData]);
  const effective = clientData || data;
  // Always call hooks at the top level, before any conditional returns
  const contacts = useMemo(() => {
    if (!effective?.basics) return [];
    const items: { label: string; url: string | null }[] = [];
    const { basics } = effective;
    if (basics?.website) items.push({ label: 'Website', url: basics.website });
    if (basics?.email) items.push({ label: basics.email, url: `mailto:${basics.email}` });
    if (basics?.location?.city) items.push({ label: basics.location.city, url: null });
    const gh = basics?.profiles?.find((p) => p.network?.toLowerCase() === 'github');
    const li = basics?.profiles?.find((p) => p.network?.toLowerCase() === 'linkedin');
    if (gh) items.push({ label: 'GitHub', url: gh.url });
    if (li) items.push({ label: 'LinkedIn', url: li.url });
    return items;
  }, [effective?.basics]);
  if (clientError && !clientData) return <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}><p>Failed to load resume: {clientError}</p></div>;
  if (!effective) return <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}><p>Loading</p></div>;

  const { basics, work = [], projects = [], skills = [] } = effective;

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
