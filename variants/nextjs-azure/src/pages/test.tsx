import Head from 'next/head';

export async function getServerSideProps({ res }: any) {
  res.setHeader('X-Robots-Tag', 'noindex');
  return { props: {} };
}

export default function TestPage() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={{ padding: 16 }}>
        <h1>Hydration Test</h1>
        <p>If you see this without an error, hydration is fine.</p>
      </div>
    </>
  );
}
