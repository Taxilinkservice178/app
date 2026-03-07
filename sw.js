self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Esta es la clave: deja que el móvil salga de GitHub hacia Google Sites
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('sites.google.com')) {
    return; // No bloquees la dirección del catálogo
  }
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
