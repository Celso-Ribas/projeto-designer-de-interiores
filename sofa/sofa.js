const slides = document.querySelectorAll('.slide-container');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// autoplay
setInterval(nextSlide, 7000);