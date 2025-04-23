const addFavoriteBtn = document.querySelectorAll(".add-favorite-btn");

addFavoriteBtn.forEach((item) => {
  item.addEventListener("click", () => {
    const addFavoriteBtnP = item.querySelector("p");
    addFavoriteBtnP.textContent =
    addFavoriteBtnP.textContent === "Delete" ? "Add to favorite" : "Delete";
  });
});
