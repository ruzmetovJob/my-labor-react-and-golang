const staticCacheName = 'statics'
const dynamicCacheName = 'dinamics'

const assetUrls = [
  "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
]
const ignoreUrls = [
  "/meta.json"
]

self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(assetUrls)
})

self.addEventListener('activate', async event => {
  const cacheNames = await caches.keys()
  await Promise.all(
    cacheNames
      .filter(name => name !== staticCacheName)
      .filter(name => name !== dynamicCacheName)
      .map(name => caches.delete(name))
  )
})

/*self.addEventListener('fetch', event => {
  const {request} = event

  const url = new URL(request.url)
  console.log(url.origin + " === " + location.origin)
  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request))
  }else{
    event.respondWith(networkFirst(request))
  }
})*/
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            /*caches.open(dynamicCacheName)
              .then(function(cache) {
                try{
                  if(!ignoreUrls.includes(event.request.pathname)) {
                    cache.put(event.request, responseToCache);
                    //console.log("Yes caching", event.request.url)
                  }else{
                    //console.log("No caching", event.request.url)
                  }
                }catch(e){
                  console.log("Error put to cache",e);
                }
              });*/

            return response;
          }
        );
      })
    );
});


async function cacheFirst(request) {
  const cached = await caches.match(request)
  return cached ?? await fetch(request)
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicCacheName)
  try {
    const response = await fetch(request)
    await cache.put(request, response.clone())
    return response
  } catch (e) {
    const cached = await cache.match(request)
    return cached ?? await caches.match('/public/offline.html')
  }
}