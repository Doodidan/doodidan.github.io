import type { Subprocess } from 'bun';

export const dev = () => {
  const env = {
    ...process.env,
    WATCH: '--watch'
  };

  let buildProc: Subprocess | undefined;
  let serveProc: Subprocess | undefined;
  const build = () => Bun.spawn(['bun', 'run', 'build:dev'], {
    env,
    stdout: 'inherit',
    stderr: 'inherit',
    onExit() {
      buildProc = build();
    },
  });
  const serve = () => Bun.spawn(['bun', 'run', 'serve'], {
    env,
    stdout: 'inherit',
    stderr: 'inherit',
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
