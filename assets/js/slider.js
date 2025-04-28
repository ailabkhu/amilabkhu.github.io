let currentIndex = 0;
const slides = document.querySelectorAll('#slider img');
const totalSlides = slides.length;
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('#dots span');

function updateSlider() {
  slider.style.transform = `translateX(${-currentIndex * 600}px)`;
  dots.forEach(dot => dot.style.color = 'gray');
  dots[currentIndex].style.color = 'black';
}

function moveSlide(step) {
  currentIndex = (currentIndex + step + totalSlides) % totalSlides;
  updateSlider();
}

function currentSlide(index) {
  currentIndex = index;
  updateSlider();
}

// 자동 슬라이드 (3초마다)
setInterval(() => {
  moveSlide(1);
}, 3000);

// 페이지 로드될 때 초기 세팅
document.addEventListener('DOMContentLoaded', updateSlider);
