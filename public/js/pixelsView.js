//events listener
export default class pixelsView { 
  constructor(html, { favoriteSelect, favoriteAdd, favoriteDelete } = {}) {
    this.html = html;
    this.favoriteSelect = favoriteSelect;
    this.favoriteAdd = favoriteAdd;
    this.favoriteDelete = favoriteAdd;
    this.html = ``;
  }

  
  /* Eventos e comportamentos */
  static setImages () {
    console.log("hello")
  }

}

// window.addEventListener('scroll', () => {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//   if (scrollTop + clientHeight >= scrollHeight -5) {
//     console.log("Carregue mais aquivos");
//   }
// })