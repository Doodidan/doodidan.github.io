import { simpleExec } from '/deps/dev/simple-exec.ts';

const DEPS_MAP = {
  '/deps/dev/refresh-client.js': 'https://deno.land/x/refresh@1.0.0/client.js',
} as const;

const isDepsMapKey = (key: unknown): key is keyof typeof DEPS_MAP => typeof key === 'string' && key in DEPS_MAP;

export const getLocalPath = async (pathname: string): Promise<string | undefined> => {
  if (!isDepsMapKey(pathname)) return;

  const depName = DEPS_MAP[pathname];

  const { stdout: jsonInfo } = await simpleExec('deno', [
    'info',
    '--json',
    depName,
  ]);

  const moduleInfo = JSON.parse(jsonInfo);

  return moduleInfo.modules[0].local;
};
