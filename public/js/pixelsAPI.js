import YOU_KEY_API from "./keyAPI.js"

const fetchPixels = () => (
  fetch("https://api.pexels.com/v1/search?query=people",{
    headers: {
      Authorization: YOU_KEY_API
    }
  }).then(resp => resp.json())
  .then(console.log)
  .catch(err => alert("API Erro: ", err))
);
