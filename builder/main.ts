// TODO: production build
// TODO: dev build
// TODO: watch
// TODO: browserlist

import { copy, emptyDir } from '/deps/dev/fs.ts';
import { join } from '/deps/dev/path.ts';
import { build } from '/deps/dev/esbuild.ts';

import '/deps/svelte.ts';

import * as prodConfig from './config/production.ts';

const config = prodConfig;

await emptyDir(config.DIST_DIR);
await copy(join(config.SRC_DIR, config.HTML_FILE), join(config.DIST_DIR, config.HTML_FILE));

build(config.CONFIG)
  .catch((reason) => {
    console.error(`Esbuild errors: `, reason);
    Deno.exit(1);
  })
  .finally(() => Deno.exit(0));
