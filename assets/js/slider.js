let currentIndex = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('#slider img');
const dots = document.querySelectorAll('#dots span');
const totalSlides = slides.length;

function getSlideWidth() {
  return slider.clientWidth; // ⭐ 슬라이더 container의 현재 width를 가져옴
}

function updateSlider() {
  const slideWidth = getSlideWidth(); // ⭐ 그때그때 현재 width로 계산
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
document.addEventListener('DOMContentLoaded', () => {
  updateSlider();
  window.addEventListener('resize', updateSlider); // ⭐ 화면 크기 변경시에도 슬라이더 위치 조정
});
