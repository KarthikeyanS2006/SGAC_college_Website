
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const dots = document.querySelectorAll('.carousel-dot');

let index = 0;
const totalImages = images.length;
const intervalTime = 3000;
let autoSlide;

function updateCarousel() {
  carouselImages.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

function nextImage() {
  index = (index + 1) % totalImages;
  updateCarousel();
}

function prevImage() {
  index = (index - 1 + totalImages) % totalImages;
  updateCarousel();
}

function startAutoSlide() {
  autoSlide = setInterval(nextImage, intervalTime);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

nextButton.addEventListener('click', () => {
  stopAutoSlide();
  nextImage();
  startAutoSlide();
});

prevButton.addEventListener('click', () => {
  stopAutoSlide();
  prevImage();
  startAutoSlide();
});

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    stopAutoSlide();
    index = idx;
    updateCarousel();
    startAutoSlide();
  });
});

updateCarousel();
startAutoSlide();
