import { createRootRoute, Outlet } from '@tanstack/react-router';
import '../styles/globals.css';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return <Outlet />;
}