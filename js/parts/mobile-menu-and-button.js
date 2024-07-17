var buttonsMenu = document.querySelectorAll('.js-menu-btn');
var mobileNav = document.querySelector('.js-mobile-nav');
var mobileLinks = document.querySelectorAll('.mobile-navigation__link');

if (buttonsMenu.length > 0) {
  buttonsMenu.forEach(function(buttonMenu) {
    buttonMenu.addEventListener('click', function () {
      buttonMenu.classList.toggle('isActive');
      document.body.classList.toggle('menu-open');
    });
  });
} else {
  console.log('На странице нет якорных ссылок в меню');
}

// Добавляем обработчики на клики по ссылкам мобильного меню
mobileLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    var targetId = link.getAttribute('href');
    var targetElement = document.querySelector(targetId);

    if (targetElement) {
      var headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10);

      // Прокрутка к нужной секции с учетом высоты шапки
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: 'smooth'
      });

      // Скрываем мобильное меню
      document.body.classList.remove('menu-open');
      if (buttonsMenu.length > 0) {
        buttonsMenu.forEach(function(buttonMenu) {
          buttonMenu.classList.remove('isActive');
        });
      }
    }
  });
});
