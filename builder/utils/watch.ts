import { watch } from 'node:fs/promises';

export const watchPath = async (path: string, cb: () => unknown | Promise<unknown>) => {
  const watcher = watch(path, { recursive: true });

  for await (const _event of watcher) {
    await cb();
  }
};

export const watchPaths = (paths: string[], cb: () => unknown | Promise<unknown>) =>
  paths.map((path) => watchPath(path, cb));
