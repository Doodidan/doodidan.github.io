import { join } from 'node:path';

import { config } from './config/index.ts';

export const serve = () => {
  return Bun.serve({
    hostname: 'localhost',
    port: 8000,
    async fetch(req) {
      const url = new URL(req.url);
      const pathName = `${url.pathname}${url.pathname.endsWith('/') ? 'index.html' : ''}`;
      const localPath = join(config.DIST_DIR, pathName);

      const file = Bun.file(localPath);

      return new Response(file);
    },
  });
};

if (import.meta.main) {
  serve();
}
