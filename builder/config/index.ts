import * as prodConfig from './production.ts';
import * as devConfig from './development.ts';

const { NODE_ENV } = process.env;

export const config = NODE_ENV === 'development' ? devConfig : prodConfig;
