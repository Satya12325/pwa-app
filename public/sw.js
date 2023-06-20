console.log("it running test")


let cacheData = "appV1";
this.addEventListener("install",(event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            return cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/',
                '/users',
                '/about'

            ]);
        })
    );
});
// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
});

this.addEventListener("fetch",(event) => {
    if(!navigator.onLine) 
    {
        event.respondWith(
                    caches.match(event.request).then((response) => {
                        if(response){
                            return response;
                        }
                        let requesturl = event.request.clone();
                        return fetch(requesturl)
                    })
                );
    }
})