import { useEffect } from 'react';
import type { GetServerSideProps } from 'next';

type FP = Record<string, any>;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const req: any = ctx.req;
  (ctx.res as any)?.setHeader?.('X-Robots-Tag', 'noindex');
  const fp: FP = {
    server_host: req.headers['host'],
    server_proto: (req.headers['x-forwarded-proto'] as string) || 'https',
    server_url: req.url,
    resolved_url: ctx.resolvedUrl,
    node_env: process.env.NODE_ENV,
    base_path: process.env.NEXT_PUBLIC_BASE_PATH || '',
    data_origin: process.env.NEXT_DATA_ORIGIN || '',
  };
  return { props: { __server: fp } };
};

export default function Probe({ __server }: { __server: FP }) {
  useEffect(() => {
    const client: FP = {
      client_host: window.location.host,
      client_proto: window.location.protocol.replace(':',''),
      client_pathname: window.location.pathname,
      client_href: window.location.href,
      base_path: process.env.NEXT_PUBLIC_BASE_PATH || '',
    };
    const diffs: Array<[string, any, any]> = [];
    const keys = new Set([...Object.keys(__server||{}), ...Object.keys(client)]);
    for (const k of keys) {
      const s = (__server as any)[k];
      const c = (client as any)[k];
      if (s !== undefined && c !== undefined && String(s) !== String(c)) {
        diffs.push([k, s, c]);
      }
    }
    if (diffs.length) {
      // eslint-disable-next-line no-console
      console.group('%cHydration fingerprint diffs','color:#e11d48;font-weight:bold');
      diffs.forEach(([k,s,c]) => console.warn(k, { server: s, client: c }));
      console.groupEnd();
    } else {
      // eslint-disable-next-line no-console
      console.info('%cHydration fingerprint: no diffs','color:#10b981');
    }
  }, [__server]);

  return (
    <main style={{ padding: 16 }}>
      <h1>Probe</h1>
      <p>Open console to see server vs client fingerprint.</p>
      <pre style={{ display: 'none' }} id="__server_fp" dangerouslySetInnerHTML={{ __html: JSON.stringify(__server) }} />
    </main>
  );
}
