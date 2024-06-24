import { serveDir, serveFile } from '/deps/dev/file-server.ts';
import { refresh } from '/deps/dev/refresh.ts';
import { getLocalPath } from './getLocalPath.ts';

const refreshMiddleware = refresh();

Deno.serve(async (req: Request) => {
  const refreshRes = refreshMiddleware(req);
  if (refreshRes) return refreshRes;

  const pathname = new URL(req.url).pathname;

  const localPath = await getLocalPath(pathname);

  if (localPath) {
    return serveFile(req, localPath);
  }

  return serveDir(req, {
    fsRoot: 'dist',
  });
});
