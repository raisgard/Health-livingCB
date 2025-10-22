import { fetchRecipes } from './data.js';

const recipeContainer = document.getElementById('recipe-container');

// Create each recipe card
function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.classList.add('recipe-card');

  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
    <h3>${recipe.name}</h3>
    <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
    <p><strong>Calories:</strong> ${recipe.calories}</p>
  `;

  card.addEventListener('click', () => showModal(recipe));
  return card;
}

// Create modal for recipe details
function showModal(recipe) {
  // Prevent multiple modals
  if (document.querySelector('.modal')) return;

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" title="Close">&times;</span>
      <h2>${recipe.name}</h2>
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>Ingredients:</h3>
      <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
      <h3>Instructions:</h3>
      <p>${recipe.instructions}</p>
    </div>
  `;

  document.body.appendChild(modal);

  // Close modal on click
  modal.querySelector('.close').addEventListener('click', () => {
    modal.remove();
  });
}

// Load recipes from JSON
async function init() {
  try {
    const recipes = await fetchRecipes();
    recipes.forEach(recipe => recipeContainer.appendChild(createRecipeCard(recipe)));
  } catch (err) {
    recipeContainer.innerHTML = `<p class="error">⚠️ Failed to load recipes. Please try again later.</p>`;
    console.error(err);
  }
}

init();
