// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const firstSlide = document.querySelector('.slider__btn--1');
const secondSlide = document.querySelector('.slider__btn--2');
const threeSlide = document.querySelector('.slider__btn--3');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
firstSlide.addEventListener('click', showFirstSlide);
secondSlide.addEventListener('click', showSecondSlide);
threeSlide.addEventListener('click', showThreeSlide);

// Функция для показа слайда
function showFirstSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showSecondSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function showThreeSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
​
// Инициализация слайдера
updateSlider();



