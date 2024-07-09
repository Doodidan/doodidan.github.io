import type { Subprocess } from 'bun';

export const dev = () => {
  const options = {
    env: {
      ...process.env,
      WATCH: '--watch'
    },
    stdout: 'inherit',
    stderr: 'inherit',
  } as const;

  let buildProc: Subprocess | undefined;
  let serveProc: Subprocess | undefined;
  const build = () => Bun.spawn(['bun', 'run', 'build:dev'], {
    ...options,
    onExit() {
      buildProc = build();
    },
  });
  const serve = () => Bun.spawn(['bun', 'run', 'serve'], {
    ...options,
    onExit() {
      serveProc = serve();
    },
  });

  buildProc = build();
  serveProc = serve();

  process.on('SIGINT', () => {
    buildProc?.kill("SIGINT");
    serveProc?.kill("SIGINT");
  });
};

if (import.meta.main) {
  dev();
}
