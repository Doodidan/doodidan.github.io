import { join } from 'node:path';
import debounce from 'lodash/debounce.js';
import once from 'lodash/once.js';

import { hotReloadSocketPath } from '../public/development/hot-reload.js';
import { config } from './config/index.ts';
import { watchPath } from './utils/watch.ts';

const hotReloadEvent = 'hot-reload';

export const serve = () => {
  const notify = debounce(() => server.publish(hotReloadEvent, ''), config.DEBOUNCE_DELAY);

  const watch = once(() => watchPath(config.DIST_DIR, notify));

  const server = Bun.serve({
    hostname: config.SERVER_HOST,
    port: config.SERVER_PORT,
    async fetch(req, server) {
      const url = new URL(req.url);

      if (url.pathname === `/${hotReloadSocketPath}`) {
        server.upgrade(req);
        return;
      }

      const pathName = decodeURI(`${url.pathname}${url.pathname.endsWith('/') ? 'index.html' : ''}`);
      const localPath = join(config.DIST_DIR, pathName);

      const file = Bun.file(localPath);

      return new Response(file);
    },
    websocket: {
      open(ws) {
        watch();
        ws.subscribe(hotReloadEvent);
      },
      message(_ws, message) {
        console.warn(`Somehow here is websocket message: ${message}`);
      },
    },
  });

  console.log(`Listening on ${server.hostname}:${server.port}...`);

  return server;
};

if (import.meta.main) {
  serve();
}
