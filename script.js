// Portfolio site JS
console.log('Portfolio site loaded.');

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = form.elements['name'].value;
      const email = form.elements['email'].value;
      const message = form.elements['message'].value;
      const mailto = `mailto:batishwani04@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
      window.location.href = mailto;
    });
  }

  // Burger menu functionality
  const burger = document.querySelector('.burger');
  const navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', !expanded);
    });
    // Close menu on link click (mobile UX)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }
}); 
