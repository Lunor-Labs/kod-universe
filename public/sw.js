// KOD Universe — Service Worker
// Cache Strategy: Cache-first for static assets, Network-first for pages

const CACHE_NAME = 'kod-universe-v1';
const STATIC_CACHE = 'kod-static-v1';

// Assets to pre-cache on install
const PRECACHE_ASSETS = [
  '/',
  '/gallery',
  '/portfolio',
  '/services',
  '/about-us',
  '/contact-us',
  '/manifest.json',
  '/icons/KoD-Eye.webp',
  '/icons/pwa/icon-192x192.png',
  '/icons/pwa/icon-512x512.png',
  '/apple-touch-icon.png',
];

// ── Install: precache key pages ──────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        // Non-fatal: some assets may not be available during build
        console.warn('[SW] Precache partial failure:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// ── Activate: prune old caches ───────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== STATIC_CACHE)
          .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: smart routing strategy ───────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip Next.js internal routes & API
  if (
    url.pathname.startsWith('/_next/') ||
    url.pathname.startsWith('/api/') ||
    url.pathname.includes('__nextjs')
  ) {
    // For _next/static — Cache first (immutable hashed filenames)
    if (url.pathname.startsWith('/_next/static/')) {
      event.respondWith(
        caches.match(request).then((cached) => {
          if (cached) return cached;
          return fetch(request).then((response) => {
            if (response.ok) {
              const clone = response.clone();
              caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
            }
            return response;
          });
        })
      );
    }
    return;
  }

  // Static media assets — Cache first, fallback to network
  if (
    /\.(webp|png|jpg|jpeg|gif|svg|ico|woff2?|ttf|otf|mp4|webm)$/i.test(url.pathname)
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        }).catch(() => cached || new Response('', { status: 503 }));
      })
    );
    return;
  }

  // HTML pages — Network first, fallback to cache
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      })
      .catch(() =>
        caches.match(request).then(
          (cached) =>
            cached ||
            caches.match('/').then(
              (home) =>
                home ||
                new Response('<h1>You are offline</h1>', {
                  headers: { 'Content-Type': 'text/html' },
                  status: 503,
                })
            )
        )
      )
  );
});
