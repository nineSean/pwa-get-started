const cacheName = 'cache-v1'

self.addEventListener('install', evt => {
  console.log('install', evt)
  evt.waitUntil(caches.open(cacheName).then(cache => {
    cache.addAll([
      '/',
      './index.css',
    ])
  }))
})
self.addEventListener('activate', evt => {
  console.log('activate', evt)
  evt.waitUntil(self.clients.claim())
})
self.addEventListener('fetch', evt => {
  console.log('fetch', evt)

  evt.respondWith(caches.open(cacheName).then(cache => {
    return cache.match(evt.request).then(response => {
      if (response) return response
      return fetch(evt.request).then(response => {
        console.log('response', response)
        cache.put(evt.request, response.clone())
        return response
      }).catch(e => {
        console.log('error', e)
      })
    })
  }))
})
