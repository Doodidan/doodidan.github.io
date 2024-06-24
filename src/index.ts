// @ts-expect-error: Deno doesn't understand svelte but builder does
import App from './App.svelte';

document.addEventListener('DOMContentLoaded', () => {
  new App({ target: document.body });
});
