import { rm, mkdir, cp } from 'node:fs/promises';
import { context, stop } from 'esbuild';
import debounce from 'lodash/debounce.js';

import { config } from './config/index.ts';
import { watchPath, watchPaths } from './utils/watch.ts';

export const build = async () => {
  const { WATCH } = process.env;
  const isWatch = Boolean(WATCH);

  const esbuildCtx = await context(config.CONFIG);

  const publicCopy = async () => {
    console.log('Copying public folders...');
    try {
      await rm(config.DIST_DIR, { recursive: true, force: true });
      await mkdir(config.DIST_DIR);

      for (let i = 0; i < config.COPY_DIR_LIST.length; i++) {
        await cp(config.COPY_DIR_LIST[i], config.DIST_DIR, { recursive: true, force: true });
      }
    } catch (error) { }
  };
  const rebuild = async () => {
    console.log('Rebuilding sources...');
    try {
      await esbuildCtx.rebuild();
    } catch (error) { }
  };
  const update = async () => {
    await publicCopy();
    await rebuild();
  };

  await update();

  if (isWatch) {
    console.log('Watching for changes...');
    const updateDebounce = debounce(update, config.DEBOUNCE_DELAY);
    const rebuildDebounce = debounce(rebuild, config.DEBOUNCE_DELAY);
    const watchers = [
      ...watchPaths(config.COPY_DIR_LIST, updateDebounce),
      watchPath(config.SRC_DIR, rebuildDebounce),
    ];
    await Promise.all(watchers);
  }

  esbuildCtx.dispose();
  stop();
};

if (import.meta.main) {
  build();
}
