// Select elements
const sections = document.querySelectorAll('.section');
const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Toggle mobile menu visibility
if (toggle && navbar) {
  toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}

// Add blur effect to sections not in focus
function handleSectionFocus() {
  let currentSection = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isVisible =
      rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;

    if (isVisible) {
      currentSection = section;
    }
  });

  sections.forEach((section) => {
    section.classList.toggle('blur', section !== currentSection);
  });
}

// Run blur handler on scroll and on page load
window.addEventListener('scroll', handleSectionFocus);
window.addEventListener('load', handleSectionFocus);
