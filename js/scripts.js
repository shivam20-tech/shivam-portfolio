// Select elements
const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Toggle mobile menu visibility
if (toggle && navbar) {
  toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}

// OPTIONAL: Close the mobile nav menu when a link is clicked
navbar?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});
