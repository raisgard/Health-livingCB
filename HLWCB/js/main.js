import { fetchRecipes } from './data.js';

const recipeContainer = document.getElementById('recipe-container');

// Create each recipe card
function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.classList.add('recipe-card');
  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
    <h3>${recipe.name}</h3>
    <p>Prep Time: ${recipe.prepTime}</p>
    <p>Calories: ${recipe.calories}</p>
  `;

  // Open modal when clicking the recipe card
  card.addEventListener('click', () => showModal(recipe));
  return card;
}

// Modal dialog for recipe details
function showModal(recipe) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" role="button" aria-label="Close">&times;</span>
      <h2>${recipe.name}</h2>
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>Ingredients:</h3>
      <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
      <h3>Instructions:</h3>
      <p>${recipe.instructions}</p>
    </div>
  `;

  // Add modal to the document
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden'; // prevent scrolling

  // Only close when clicking the close button
  const closeBtn = modal.querySelector('.close');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
    document.body.style.overflow = '';
  });
}


  function closeModal() {
    modal.classList.add('fade-out');
    setTimeout(() => {
      document.body.removeChild(modal);
      document.body.style.overflow = '';
    }, 300);
  }


// Navigation menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Initialize and load recipes
async function init() {
  try {
    const recipes = await fetchRecipes();
    recipes.forEach(recipe => {
      recipeContainer.appendChild(createRecipeCard(recipe));
    });
  } catch (error) {
    console.error('Error loading recipes:', error);
    recipeContainer.innerHTML = `<p class="error">Failed to load recipes. Please try again later.</p>`;
  }
}

init();
