import type { BuildOptions } from '/deps/dev/esbuild.ts';
import { CONFIG as COMMON_CONFIG } from './common.ts';
export * from './common.ts';

export const CONFIG: BuildOptions = {
  ...COMMON_CONFIG,
  minify: true,
};
