// TODO: browserlist

import { copy, emptyDir } from '/deps/dev/fs.ts';
import { context, stop } from '/deps/dev/esbuild.ts';

import * as prodConfig from './config/production.ts';
import * as devConfig from './config/development.ts';

const TARGET = Deno.env.get('TARGET');
const WATCH = Deno.env.get('WATCH');
const isWatch = Boolean(WATCH);

const config = TARGET === 'development' ? devConfig : prodConfig;

await emptyDir(config.DIST_DIR);

for (let i = 0; i < config.COPY_DIR_LIST.length; i++) {
  await copy(config.COPY_DIR_LIST[i], config.DIST_DIR, { overwrite: true });
}

const esbuildCtx = await context(config.CONFIG);

await esbuildCtx.rebuild();

if (isWatch) {
  const watcher = Deno.watchFs(config.SRC_DIR, { recursive: true });

  console.log('Watching for rebuild...');

  for await (const _event of watcher) {
    console.log('Rebuilding...');
    await esbuildCtx.rebuild();
  }
}

esbuildCtx.dispose();
stop();
