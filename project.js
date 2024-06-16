const dropdown = document.querySelector('.dropdown');
const dropbtn = document.querySelector('.dropbtn');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const navLinks = document.querySelector('.nav-links');


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

