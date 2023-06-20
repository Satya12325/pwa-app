// Define the cache name and version
const CACHE_NAME = "my-cache-v1";

// List of URLs/assets to cache
const urlsToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/main.js",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/bundle.js",
  "/index.html",
  "/",
  "/users",
  "/about",
  // Add more URLs as needed
];

// Install event: cache the assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Activate event: clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});

// Fetch event: serve cached assets or fetch from network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If the request is in the cache, return the cached response
      if (response) {
        return response;
      }

      // Otherwise, fetch the request from the network
      return fetch(event.request);
    })
  );
});
