// js/form.js

// Select form and input fields
const form = document.querySelector('.recipe-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

// Load saved data on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem('userName');
  const savedEmail = localStorage.getItem('userEmail');

  if (savedName) nameInput.value = savedName;
  if (savedEmail) emailInput.value = savedEmail;
});

// Save data to localStorage when typing
nameInput.addEventListener('input', () => {
  localStorage.setItem('userName', nameInput.value);
});

emailInput.addEventListener('input', () => {
  localStorage.setItem('userEmail', emailInput.value);
});

// Modal confirmation
form.addEventListener('submit', (e) => {
  e.preventDefault(); // stop default submission

  // Create modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <h2>Confirm Submission</h2>
      <p>Are you sure you want to submit your recipe?</p>
      <button class="confirm">Yes, Submit</button>
      <button class="cancel">Cancel</button>
    </div>
  `;
  document.body.appendChild(modal);

  // Handle confirm
  modal.querySelector('.confirm').addEventListener('click', () => {
    // Clear localStorage
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    // Redirect to thankyou.html
    window.location.href = 'thankyou.html';
  });

  // Handle cancel
  modal.querySelector('.cancel').addEventListener('click', () => {
    document.body.removeChild(modal);
  });
});
