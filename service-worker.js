const CACHE_NAME = 'ingles-micro-v2';
const ARCHIVOS = ['./', './index.html', './styles.css', './frases.js', './app.js', './manifest.webmanifest'];
// Instalar toda la versión antes de sustituir la anterior.
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(nombres => Promise.all(
    nombres.filter(nombre => nombre.startsWith('ingles-micro-') && nombre !== CACHE_NAME)
      .map(nombre => caches.delete(nombre))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.open(CACHE_NAME).then(async cache => {
    const respuesta = await cache.match(event.request);
    return respuesta || fetch(event.request);
  }));
});
