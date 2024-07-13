import { join } from 'node:path';
import { dist, filename } from './common-config.js';
export * from './common-config.js';

export const filepath = join(dist, filename);
