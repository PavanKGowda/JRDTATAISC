const dropdown = document.querySelector('.dropdown');
const dropbtn = document.querySelector('.dropbtn');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

menuBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
  navLinks.classList.toggle('display');
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  dropdownContent.classList.remove('show');
  navLinks.classList.remove('display');
  menuBtn.style.display = 'block';
  closeBtn.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target) && !dropbtn.contains(e.target)) {
    dropdownContent.classList.remove('show');
    navLinks.classList.remove('display');
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  }
});

// Toggle header-scrolled and header-transparent classes on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
  
  if (window.scrollY > 0) {
    header.classList.add('header-transparent');
  } else {
    header.classList.remove('header-transparent');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const footerItems = document.querySelectorAll('.footer-left, .footer-center, .footer-right');
  const projItems = document.querySelectorAll('.home h1, .project');
  const tetItems = document.querySelectorAll('.team-det, .project-card, .project .project-abstract, .proj-card-image, .category');

    function checkVisibility() {
        [...footerItems, ...projItems, ...tetItems].forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                item.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility in case the elements are already in view on page load
});

