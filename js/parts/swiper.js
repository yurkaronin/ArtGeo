document.addEventListener('DOMContentLoaded', function () {

  // Слайдер с фотогалереей на всю ширину
  if(document.querySelector('.gallery')) {
    const swiper = new Swiper(".gallery .swiper", {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 25000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".gallery .swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".gallery .swiper-button-next",
        prevEl: ".gallery .swiper-button-prev",
      },
      breakpoints: {
        320: {
          spaceBetween: 20,
          centeredSlides: true,
        },

        768: {
          spaceBetween: 24,
          centeredSlides: true,
        },
        1024: {
          spaceBetween: 32,
          centeredSlides: true,
        },
        1280: {
          spaceBetween: 32,
          centeredSlides: false,
        },
      },
    });

  };


});
