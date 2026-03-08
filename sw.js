const CACHE_NAME = 'taxi-link-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './logo.png',
  './manifest.json'
];

// 1. INSTALACIÓN: Guarda el logo de oro y los archivos en el móvil
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Guardando archivos en memoria...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 2. ACTIVACIÓN: Limpia memorias antiguas para que no haya errores
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// 3. NAVEGACIÓN: Permite ir a Google Sites sin problemas
self.addEventListener('fetch', (event) => {
  // Si vas al catálogo, no interfieras
  if (event.request.url.in…
