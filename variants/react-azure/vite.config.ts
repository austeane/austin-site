import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Ensure assets & routes are under /azure/react
  base: '/azure/react/',
  build: {
    // Place build under dist/azure/react so files are served at /azure/react/* without rewrites
    outDir: 'dist/azure/react',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
