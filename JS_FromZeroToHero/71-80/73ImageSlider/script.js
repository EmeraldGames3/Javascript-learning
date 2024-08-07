let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;

  currentSlide += direction;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  const offset = -currentSlide * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

// Optionally, you can set an interval to automatically change slides
setInterval(() => {
  changeSlide(1);
}, 3000); // Change slide every 3 seconds
