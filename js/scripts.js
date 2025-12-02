// Wait for DOM to be ready (safe placement if you put this in <head>)
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  // Toggle mobile menu visibility
  if (toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }

  // Close the mobile nav menu when a nav link is clicked (good UX)
  if (navbar) {
    navbar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
      });
    });
  }
});
