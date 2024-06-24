import { join } from '/deps/dev/path.ts';
import type { BuildOptions } from '/deps/dev/esbuild.ts';
import esbuildSvelte from '/deps/dev/esbuild-svelte.ts';
import { sveltePreprocess } from '/deps/dev/svelte-preprocess.ts';
import { esbuildPluginBrowserslist } from '/deps/dev/esbuild-plugin-browserslist.ts';
import browserslist from '/deps/dev/browserslist.ts';

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
    // @ts-expect-error: esbuildSvelte is callable in fact, it's deno-ts error
    esbuildSvelte({
      preprocess: sveltePreprocess(),
    }),
    esbuildPluginBrowserslist(browserslist(), { printUnknownTargets: false }),
  ],
};
