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

/*banner-slider*/
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.banner-slides img');
  const whiteBoxTitle = document.getElementById('white-box-title');
  const whiteBoxDescription = document.getElementById('white-box-description');
  const whiteBox = document.querySelector('.white-box');
  const prevButton = document.querySelector('.banner-slider-btn-left');
  const nextButton = document.querySelector('.banner-slider-btn-right');
  let currentSlide = 0;
  const totalSlides = slides.length;
  let whiteBoxAnimated = false;

  function showSlide(index) {
    slides.forEach((slide, idx) => {
      slide.classList.remove('active');
      if (idx === index) {
        slide.classList.add('active');
        whiteBoxTitle.textContent = slide.dataset.title;
        whiteBoxDescription.textContent = slide.dataset.description;
        
        // Reset and add the fly-in class to trigger the animation
        whiteBox.classList.remove('fly-in');
        setTimeout(() => {
          whiteBox.classList.add('fly-in');
        }, 10); // Small delay to ensure reflow

        whiteBoxAnimated = true;
      }
    });
    updateButtons();
  }

  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    } else {
      currentSlide = 0; // Loop back to the first slide
    }
    showSlide(currentSlide);
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = totalSlides - 1; // Loop back to the last slide
    }
    showSlide(currentSlide);
  }

  function updateButtons() {
    if (currentSlide === 0) {
      prevButton.style.display = 'none';
    } else {
      prevButton.style.display = 'block';
    }
    if (currentSlide === totalSlides - 1) {
      nextButton.style.display = 'none';
    } else {
      nextButton.style.display = 'block';
    }
    console.log(`Current slide: ${currentSlide}, Prev button: ${prevButton.style.display}, Next button: ${nextButton.style.display}`);
  }

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  showSlide(currentSlide);

  // Auto-slide change every 3 seconds
  setInterval(nextSlide, 2500);
});


/*Fly-in*/
document.addEventListener('DOMContentLoaded', function() {
  const footerItems = document.querySelectorAll('.footer-left, .footer-center, .footer-right');
  const courseItems = document.querySelectorAll('.courses-heading, .course-card');
  const projItems = document.querySelectorAll('.project-heading, .program-card');
  const eventItems = document.querySelectorAll('.news-heading, .card');
  const bannerItems = document.querySelectorAll('.home h1, .banner-slider, .white-box');

  function checkVisibility() {
    [...footerItems, ...courseItems, ...projItems, ...eventItems, ...bannerItems].forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        item.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Check visibility in case the elements are already in view on page load
});

document.addEventListener("DOMContentLoaded", function() {
  const eventCards = document.querySelectorAll('.event-card, .team-det');

  function checkPosition() {
    const windowHeight = window.innerHeight;
    eventCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < windowHeight - 100) { // 100px before the card comes into view
        card.classList.add('fly-in');
      }
    });
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkPosition);
  checkPosition(); // Initial check on page load
});
