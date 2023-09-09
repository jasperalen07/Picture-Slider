const sliderContainer = document.querySelector('.slider-container');
const images = document.querySelectorAll('.slider-container img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Add event listeners to navigation buttons
document.querySelector('.next-button').addEventListener('click', nextImage);
document.querySelector('.prev-button').addEventListener('click', prevImage);

// Initial display
showImage(currentIndex);
