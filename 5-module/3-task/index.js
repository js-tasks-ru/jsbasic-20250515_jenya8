function initCarousel() {
  const carouselWrapper = document.querySelector('[data-carousel-holder]');

  if (!carouselWrapper) {
    return;
  }

  const carouselInner = carouselWrapper.querySelector('.carousel__inner');
  const carouselArrows = carouselWrapper.querySelectorAll('.carousel__arrow');
  const carouselArrowLeft = carouselWrapper.querySelector('.carousel__arrow_left');
  const carouselArrowRight = carouselWrapper.querySelector('.carousel__arrow_right');

  const slides = carouselWrapper.querySelectorAll('.carousel__slide');
  const slideWidthsArray = [];
  let count = 1;

  for (let i = 0; i < slides.length; i++) {
    slideWidthsArray.push(slides[i].offsetWidth);
  }

  if (count === 1) {
    carouselArrowLeft.style.display = 'none';
  }

  const arrowClickHandle = (evt) => {
    if (evt.target.closest('.carousel__arrow_right') && count < slides.length) {
      carouselInner.style.transform = `translateX(-${slideWidthsArray[count] * count}px)`;
      count++;

      if (count === slides.length) {
        carouselArrowRight.style.display = 'none';
      } else {
        carouselArrowLeft.style.display = '';
      }
    }

    if (evt.target.closest('.carousel__arrow_left') && count > 1) {
      count--;
      carouselInner.style.transform = `translateX(-${slideWidthsArray[count - 1] * (count - 1)}px)`;

      if (count === 1) {
        carouselArrowLeft.style.display = 'none';
      } else {
        carouselArrowRight.style.display = '';
      }
    }
  };

  carouselArrows.forEach((button) => {
    button.addEventListener('click', arrowClickHandle);
  });
}
