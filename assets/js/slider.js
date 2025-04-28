let currentIndex = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('#slider img');
const totalSlides = slides.length;
const dots = document.querySelectorAll('#dots span');
const slideWidth = 600; // 슬라이드 하나의 너비

function updateSlider() {
  slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  dots.forEach(dot => dot.style.color = 'gray');
  dots[currentIndex % totalSlides].style.color = 'black';
}

function moveSlide(step) {
  currentIndex = (currentIndex + step + totalSlides) % totalSlides;
  updateSlider();
}

function currentSlide(index) {
  currentIndex = index;
  updateSlider();
}

// 자동 슬라이드
setInterval(() => {
  moveSlide(1);
}, 3000);

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', updateSlider);
