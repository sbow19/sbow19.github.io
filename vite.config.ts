import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js / vite.config.ts
import ViteYaml from '@modyfi/vite-plugin-yaml';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteYaml(),
    tsconfigPaths()
  ],
})
