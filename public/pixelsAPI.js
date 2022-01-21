import YOU_KEY_API from "./keyAPI.js"

fetch("https://api.pexels.com/v1/search?query=people",{
  headers: {
    Authorization: YOU_KEY_API
  }
}).then(resp => {
  return resp.json()
})
.then(data => {
  console.log(data)
})

