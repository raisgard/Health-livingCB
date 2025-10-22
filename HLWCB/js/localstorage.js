// Inside createRecipeCard function, after setting innerHTML
const favBtn = document.createElement('button');
favBtn.textContent = "❤️ Favorite";
card.appendChild(favBtn);

favBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent modal opening
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(recipe);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  alert(`${recipe.name} added to favorites!`);
});
