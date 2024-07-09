document.addEventListener('DOMContentLoaded', function () {
  if (window.matchMedia('(max-width: 1380px)').matches) {
    var navButtons = document.querySelectorAll('.main-nav__button');

    navButtons.forEach(function(button) {
      button.addEventListener('click', function () {
        var navItem = button.closest('.main-nav__item');
        button.classList.toggle('isActive');
        if (navItem) {
          navItem.classList.toggle('isActive');
        }
      });
    });
  }
});
