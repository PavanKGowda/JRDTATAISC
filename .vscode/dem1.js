document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".banner-slides img");
    const whiteBox = document.querySelector(".white-box");
    const whiteBoxTitle = document.getElementById("white-box-title");
    const whiteBoxDescription = document.getElementById("white-box-description");

    let currentSlide = 0;

    function updateWhiteBox() {
        const activeSlide = slides[currentSlide];
        const title = activeSlide.getAttribute("data-title");
        const description = activeSlide.getAttribute("data-description");

        whiteBoxTitle.textContent = title;
        whiteBoxDescription.textContent = description;

        whiteBox.classList.add("fly-in");
        setTimeout(() => {
            whiteBox.classList.remove("fly-in");
        }, 1000);
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
        currentSlide = index;
        updateWhiteBox();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Initialize the first slide and white box
    showSlide(currentSlide);

    // Reveal elements with a delay for initial page load
    setTimeout(() => {
        document.querySelector(".home").classList.add("visible");
        whiteBox.classList.add("visible");
    }, 500);
});
