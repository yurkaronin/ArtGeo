document.addEventListener('DOMContentLoaded', function () {

  // Слайдер с фотогалереей на всю ширину
  if(document.querySelector('.gallery')) {
    const swiper = new Swiper(".gallery .swiper", {
      slidesPerView: 'auto',
      spaceBetween: 32,
      loop: true,
      freeMode: true,
      autoplay: {
        delay: 25000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".gallery .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".gallery .swiper-button-next",
        prevEl: ".gallery .swiper-button-prev",
      }
    });

  };


});
