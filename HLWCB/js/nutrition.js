const container = document.getElementById('nutrition-container');

async function fetchNutritionData() {
  try {
    const response = await fetch('data/nutrition.json');
    if (!response.ok) throw new Error('Failed to fetch nutrition data');
    const data = await response.json();
    displayNutrition(data);
  } catch (error) {
    container.innerHTML = `<p class="error">⚠️ Unable to load nutrition info right now.</p>`;
    console.error(error);
  }
}

function displayNutrition(items) {
  items.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('nutrition-card');
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p><strong>Calories:</strong> ${item.calories}</p>
      <p><strong>Carbs:</strong> ${item.carbs}g</p>
      <p><strong>Protein:</strong> ${item.protein}g</p>
      <p><strong>Fat:</strong> ${item.fat}g</p>
    `;
    container.appendChild(card);
  });
}

fetchNutritionData();

// js/nutrition.js

const ctx = document.getElementById('nutritionChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Carbs', 'Fiber', 'Protein', 'Fat', 'Calories'],
    datasets: [
      {
        label: 'Cassava Bread',
        data: [38, 40, 1.4, 0, 0.5],
        backgroundColor: 'rgba(59, 110, 77, 0.8)',
      },
      {
        label: 'Wheat Bread',
        data: [49, 40, 8.8, 0.5, 2],
        backgroundColor: 'rgba(226, 182, 89, 0.8)',
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Cassava vs Wheat Bread (per 100g)' },
    },
    scales: {
      y: { beginAtZero: true },
    },
  },
});
