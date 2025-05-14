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

// Add blur effect to non-focused sections
function handleSectionFocus() {
  let currentSection = null;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;

    if (isVisible) currentSection = section;
  });

  sections.forEach(section => {
    if (currentSection) {
      section.classList.toggle('blur', section !== currentSection);
    } else {
      section.classList.remove('blur'); // fallback: remove blur if none is focused
    }
  });
}

// Trigger on scroll and load
window.addEventListener('scroll', handleSectionFocus);
window.addEventListener('load', handleSectionFocus);
