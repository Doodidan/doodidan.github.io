import { join } from '/deps/dev/path.ts';
import type { BuildOptions } from '/deps/dev/esbuild.ts';
import sveltePlugin from '/deps/dev/esbuild-svelte.ts';
import { sveltePreprocess } from '/deps/dev/svelte-preprocess.ts';

export const SRC_DIR = 'src';
export const ENTRY_FILE = 'main.ts';
export const HTML_FILE = 'index.html';
export const DIST_DIR = 'dist';
export const CONFIG: BuildOptions = {
  entryPoints: [join(SRC_DIR, ENTRY_FILE)],
  bundle: true,
  outdir: DIST_DIR,
  mainFields: ['svelte', 'browser', 'module', 'main'],
  conditions: ['svelte', 'browser'],
  splitting: true,
  format: `esm`,
  plugins: [
    (sveltePlugin as unknown as Function)({
      preprocess: sveltePreprocess(),
    }),
  ],
};
