document.addEventListener("DOMContentLoaded", function() {

  function adjustMapHeight() {
    var footer = document.querySelector('.footer__column--mod');
    var mapContainer = document.querySelector('.map__content');
    if (footer && mapContainer) {
      var footerHeight = footer.offsetHeight; // Получаем высоту колонки, где находится карта
      mapContainer.style.height = footerHeight + 'px'; // Применяем высоту к контейнеру карты
    }
  }

  // Вызываем функцию при загрузке страницы и при изменении размера окна
  window.addEventListener('load', adjustMapHeight);
  window.addEventListener('resize', adjustMapHeight);


});



// техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
// получить в консоли элемент, по которому кликнули
document.addEventListener('click', e => console.log(e.target));

