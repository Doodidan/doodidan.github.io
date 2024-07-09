import { join } from 'node:path';
import type { BuildOptions } from 'esbuild';
import { CONFIG as COMMON_CONFIG, COPY_DIR_LIST as COMMON_COPY_DIR_LIST, PUBLIC_DIR } from './common.ts';
export * from './common.ts';

export const COPY_DIR_LIST = [...COMMON_COPY_DIR_LIST, join(PUBLIC_DIR, 'development')];
export const CONFIG: BuildOptions = {
  ...COMMON_CONFIG,
  sourcemap: 'linked',
};
