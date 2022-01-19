const input = document.getElementById('input');
const [grid] = document.getElementsByClassName('grid');

input.addEventListener('keydown', function(event) {
  if(event.key === 'Enter') loadImg();
});

function loadImg (people) {
  removeImages();
  const url = `https://api.pexels.com/v1/search?query=${input.value || people}?page=2&per_page=40`;
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      alert(response.status);
    })
    .then (data => {
      const imageNodes = []
      for (let i = 0; i < data.photos.length; i++) {
        imageNodes[i]  = document.createElement('div');
        imageNodes[i].className = 'img';
        imageNodes[i].style.backgroundImage = 'url('+data.photos[i].src.medium+')';
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

window.onload = () => {
  loadImg('people');
}