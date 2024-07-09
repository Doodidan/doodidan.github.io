export const hotReloadSocketPath = 'hot-reload-socket';

export const hotReloadSocket = () => {
  const socket = new WebSocket(`ws://${window.location.host}/${hotReloadSocketPath}`);

  socket.addEventListener('message', () => {
    window.location.reload();
  });
};

const isBrowser = Boolean(new URL(import.meta.url).searchParams.get('browser'));

if (isBrowser) {
  hotReloadSocket();
}
