// Blur effect on scroll
const sections = document.querySelectorAll('.section');
const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

toggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
function handleSectionFocus() {
  let currentSection = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
    if (isVisible) currentSection = section;
  });

  sections.forEach((section) => {
    if (section === currentSection) {
      section.classList.remove('blur');
    } else {
      section.classList.add('blur');
    }
  });
}

window.addEventListener('scroll', handleSectionFocus);
window.addEventListener('load', handleSectionFocus);
