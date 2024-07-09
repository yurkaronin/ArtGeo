var buttonsMenu = document.querySelectorAll('.js-menu-btn');
if (buttonsMenu.length > 0) {
  buttonsMenu.forEach(function(buttonMenu) {
    buttonMenu.addEventListener('click', function () {
      buttonMenu.classList.toggle('isActive');
      document.body.classList.toggle('menu-open');
    });
  });
} else {
  console.log('На странице нет кнопок меню');
}
