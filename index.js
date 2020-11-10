navigator.serviceWorker.register('./sw.js', {
  scope: '/'
}).then(registration => {
  console.log(registration)
}, error => {
  console.log(error)
})
