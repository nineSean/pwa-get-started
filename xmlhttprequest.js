const xhr = new XMLHttpRequest()

// parse json data to js data type by default
xhr.responseType = 'json'

xhr.onreadystatechange = evt => {
  console.log('xhr', xhr)
  if (xhr.readyState === 4 && 200 <= xhr.status < 300) {
    console.log('respose', xhr.response)
  }
}

xhr.open('GET', '/userinfo.json')

xhr.send()

const req = new Request('/userinfo.json', {
  method: 'GET',
  credentials: 'include',
  headers: {
    'x-sean': 'x-sean',
  }
})

// fetch(req)
//   .then(response => response.json())
//   .then(data => console.log(data))
