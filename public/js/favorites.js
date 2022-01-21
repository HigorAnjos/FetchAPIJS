const favorites = class {
  // getAllFavorites
  static getAllFavorites () {
    const allfavorites = JSON.parse(localStorage.getItem("my-favorites") || "[]");
    return allfavorites;
  }

  static saveFavorite (favoriteToSave) {
    // saveFavorite
  }


  static deleteFavorite (favoriteToDelete) {
    // deleteFavorite
  }
}

export default favorites
