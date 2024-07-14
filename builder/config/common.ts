import { join } from 'node:path';
import type { BuildOptions } from 'esbuild';
import esbuildSvelte from 'esbuild-svelte';
import { sveltePreprocess } from 'svelte-preprocess';
import { esbuildPluginBrowserslist } from 'esbuild-plugin-browserslist';
import browserslist from 'browserslist';

const { TEL } = process.env;

export const DEBOUNCE_DELAY = 50;
export const SERVER_HOST = 'localhost';
export const SERVER_PORT = 8000;
export const SRC_DIR = 'src';
export const PUBLIC_DIR = 'public';
export const COPY_DIR_LIST = [join(PUBLIC_DIR, 'common')];
export const DIST_DIR = 'dist';
export const ENTRY_FILE = 'index.ts';
export const CONFIG: BuildOptions = {
  entryPoints: [join(SRC_DIR, ENTRY_FILE)],
  bundle: true,
  outdir: DIST_DIR,
  mainFields: ['svelte', 'browser', 'module', 'main'],
  conditions: ['svelte', 'browser'],
  splitting: true,
  format: `esm`,
  plugins: [
    // @ts-expect-error: esbuildSvelte is callable in fact, it's ts error
    esbuildSvelte({
      preprocess: sveltePreprocess(),
    }),
    esbuildPluginBrowserslist(browserslist(), { printUnknownTargets: false }),
  ],
  define: {
    user: `{ "tel": "${TEL ?? ''}" }`,
  },
};
