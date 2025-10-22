document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.querySelector('.nav-overlay');

  const closeMenu = () => {
    navLinks.classList.remove('show');
    hamburger.classList.remove('active');
    overlay.classList.remove('show');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('show');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  };

  // Hamburger click
  hamburger.addEventListener('click', toggleMenu);

  // Overlay click closes menu
  overlay.addEventListener('click', closeMenu);

  // Clicking a nav link closes menu
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Highlight active page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
