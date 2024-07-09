import { rm, mkdir, cp, watch } from 'node:fs/promises';
import { context, stop } from 'esbuild';

import { config } from './config/index.ts';

export const build = async () => {
  const { WATCH } = process.env;
  const isWatch = Boolean(WATCH);

  const esbuildCtx = await context(config.CONFIG);

  const publicCopy = async () => {
    console.log('Copying public folders...');
    await rm(config.DIST_DIR, { recursive: true, force: true });
    await mkdir(config.DIST_DIR);
  
    for (let i = 0; i < config.COPY_DIR_LIST.length; i++) {
      await cp(config.COPY_DIR_LIST[i], config.DIST_DIR, { recursive: true, force: true });
    }
  };
  const rebuild = async () => {
    console.log('Rebuilding sources...');
    await esbuildCtx.rebuild();
  };
  const update = async () => {
    await publicCopy();
    await rebuild();
  };

  await update();

  if (isWatch) {
    const watchPath = async (path: string, cb: () => Promise<unknown>) => {
      const watcher = watch(path, { recursive: true });

      for await (const _event of watcher) {
        await cb();
      }
    };

    console.log('Watching for changes...');
    const watchers = [
      ...config.COPY_DIR_LIST.map((path) => watchPath(path, update)),
      watchPath(config.SRC_DIR, rebuild),
    ];
    await Promise.all(watchers);
  }

  esbuildCtx.dispose();
  stop();
};

if (import.meta.main) {
  build();
}
