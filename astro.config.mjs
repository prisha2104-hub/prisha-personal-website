// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: { enabled: false },
  // Fixed dev port. Astro's own `server.port` silently tries the next free
  // port if this one is taken; `vite.server.strictPort` overrides that and
  // makes it fail instead, so the URL never changes on its own.
  server: { port: 5173 },
  vite: {
    server: { strictPort: true },
  },
});
