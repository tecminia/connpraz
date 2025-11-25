// sw.js - Service Worker básico
const CACHE_NAME = 'connpraz-v1';
const urlsToCache = [
  '/Connpraz/',
  '/Connpraz/index.html',
  '/Connpraz/manifest.json',
];
  // Adicione outros recursos aqui
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

