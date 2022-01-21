import YOU_KEY_API from "./key.js"
//import pixelsView from "./pixelsView.js";


const input = document.getElementById('input');
const [grid] = document.getElementsByClassName('grid');

input.addEventListener('keydown', function(event) {
  if(event.key === 'Enter') loadImg();
});

async function loadImg (people) {
  removeImages();

  //const url = `https://api.pexels.com/v1/search?query=${input.value || people}?page=2&per_page=40`;
  const url = `https://api.pexels.com/v1/search?query=${input.value || people}?page=10&per_page=40`;
  const aut = {
    headers: {
      Authorization: YOU_KEY_API
    }
  }
  fetch(url, aut)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      alert(response.status);
    })
    .then (data => {
      const imageNodes = []
      for (let i = 0; i < data.photos.length; i++) {
        imageNodes[i]  = document.createElement('img');
        imageNodes[i].className = 'img';
        imageNodes[i].src = data.photos[i].src.medium;
        imageNodes[i].addEventListener('dblclick', () => {
          window.open(data.photos[i].src.original, '_blank');
        })
        grid.appendChild(imageNodes[i]);
      }
    });
    
}

function removeImages() {
  grid.innerHTML = '';
}

function dayNightMode() {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 7 && hour <= 19) {
    document.body.style.backgroundColor = 'whitesmoke';
    document.body.style.color = 'black';
  } else {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }
}

window.addEventListener('load', dayNightMode);

window.onload = async () => {
  await loadImg('people');
}

async function moreLoadImg (people) {

  //const url = `https://api.pexels.com/v1/search?query=${input.value || people}?page=2&per_page=40`;
  const url = `https://api.pexels.com/v1/search?query=${input.value || people}?page=10&per_page=40`;
  const aut = {
    headers: {
      Authorization: YOU_KEY_API
    }
  }
  fetch(url, aut)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      alert(response.status);
    })
    .then (data => {
      const imageNodes = []
      for (let i = 0; i < data.photos.length; i++) {
        imageNodes[i]  = document.createElement('img');
        imageNodes[i].className = 'img';
        imageNodes[i].src = data.photos[i].src.medium;
        imageNodes[i].addEventListener('dblclick', () => {
          window.open(data.photos[i].src.original, '_blank');
        })
        grid.appendChild(imageNodes[i]);
      }
    });
}

window.addEventListener('scroll', async () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight -5) {
    await moreLoadImg('people');
  }
})