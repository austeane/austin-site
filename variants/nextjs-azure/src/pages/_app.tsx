import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '@/styles/globals.css';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error?: any }>{
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, info: any) {
    // Log detailed error to console to aid debugging
    // eslint-disable-next-line no-console
    console.error('App ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem' }}>
          <h2>Client error</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children as any;
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}
