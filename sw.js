/* Service worker mínimo: torna o BelaHora instalável (o sistema roda online). */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* sempre online */ });
