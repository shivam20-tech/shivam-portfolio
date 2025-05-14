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

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;

    if (isVisible) currentSection = section;
  });

  sections.forEach((section) => {
    // Ensure blur is only added when section is not focused
    if (currentSection) {
      section.classList.toggle('blur', section !== currentSection);
    } else {
      section.classList.remove('blur'); // remove blur if no section is focused
    }
  });
}

// Trigger on scroll and load
window.addEventListener('scroll', handleSectionFocus);
window.addEventListener('load', handleSectionFocus);

// Remove blur if clicking a navigation link (this fixes the issue for mobile when navigating)
navbar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    sections.forEach((section) => {
      section.classList.remove('blur'); // Remove blur when navigating to a section
    });
  });
});
