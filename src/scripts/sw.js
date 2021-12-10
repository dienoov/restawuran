/* eslint-disable no-restricted-globals */
self.addEventListener('install', () => {
  console.log('Installing Service Worker');
});

self.addEventListener('activate', () => {
  console.log('Activating Service Worker');
});

self.addEventListener('fetch', (ev) => {
  console.log(ev.request);
  ev.respondWith(fetch(ev.request));
});
