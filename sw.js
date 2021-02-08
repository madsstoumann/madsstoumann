const CACHE_NAME = 'static-cache-v1.0.1';
const FILES_TO_CACHE = [
	'favicon.ico',
	'/index.html',
	'/site.webmanifest',
	'/assets/favicon/favicon-32x32.png',
	'/assets/favicon/android-chrome-192x192.png',
	'/assets/fonts/montserrat-v15-latin-regular.woff',
	'/assets/fonts/montserrat-v15-latin-regular.woff2',
	'/assets/styles.css?v=1.0.7',
	'/assets/main.js?v=1.0.7'
];

self.addEventListener('install', (evt) => {
	evt.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(FILES_TO_CACHE);
		}).then(self.skipWaiting())
	);
});

self.addEventListener('activate', (evt) => {
	evt.waitUntil(
		caches.keys().then((keyList) => {
			return Promise.all(keyList.map((key) => {
				if (key !== CACHE_NAME) {
					return caches.delete(key);
				}
			}));
		})
	);
	self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
	evt.respondWith(
		caches.open(CACHE_NAME).then(async cache => {
			const cacheResponse = await cache.match(evt.request);
			if (evt.request.cache === 'only-if-cached' && evt.request.mode !== 'same-origin') {
				return;
			}
			return cacheResponse || fetch(evt.request).then(networkResponse => {
				cache.put(evt.request, networkResponse.clone());
				return networkResponse;
			});
		})
	)
});