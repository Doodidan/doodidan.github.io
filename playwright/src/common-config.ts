import packageJson from '../package.json' with {type: 'json'};

const POSTFIX = ['Resume'];

export const route = 'http://localhost:8000';
export const dist = '../dist';
export const name = [packageJson.author.name, ...POSTFIX].join(' ');
export const ext = 'pdf';
export const filename = [name, ext].join('.');
