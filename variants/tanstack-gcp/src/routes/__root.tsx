import { createRootRoute, Outlet } from '@tanstack/react-router';
import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/layout.css';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}