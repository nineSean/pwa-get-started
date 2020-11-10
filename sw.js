self.addEventListener('install', evt => {
  console.log('install', evt)

  // restart instace when changing files with self.skipWaiting
  evt.waitUntil(self.skipWaiting())
})
self.addEventListener('activate', evt => {
  console.log('activate', evt)
  evt.waitUntil(self.clients.claim())
})
self.addEventListener('fetch', evt => {
  console.log('fetch', evt)
})
