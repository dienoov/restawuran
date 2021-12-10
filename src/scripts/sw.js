/* eslint-disable no-restricted-globals */

import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (ev) => {
  ev.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (ev) => {
  ev.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (ev) => {
  ev.respondWith(CacheHelper.revalidateCache(ev.request));
});
