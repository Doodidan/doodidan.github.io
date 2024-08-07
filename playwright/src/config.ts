import { join } from 'node:path';

import packageJson from '../package.json' with {type: 'json'};

const POSTFIX = ['Resume'];

export const route = 'http://localhost:8000';
export const dist = '../dist';
export const filename = `${[packageJson.author.name, ...POSTFIX].join(' ')}.pdf`;
export const filepath = join(dist, filename);
