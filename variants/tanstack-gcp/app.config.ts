import { defineConfig } from '@tanstack/start/config';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

export default defineConfig({
  server: {
    preset: 'netlify',
  },
  vite: {
    base: '/gcp/tanstack/',
    plugins: () => [
      TanStackRouterVite({
        routesDirectory: './src/routes',
        generatedRouteTree: './src/routeTree.gen.ts',
      }),
    ],
  },
});