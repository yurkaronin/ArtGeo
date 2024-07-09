document.addEventListener('DOMContentLoaded', function () {
  // Элемент с классом .js-show-search
  const searchButton = document.querySelector('.js-show-search');
  // Форма поиска
  const searchForm = document.querySelector('.search__form');

  if (searchButton) {
    // Слушаем событие клика по элементу .js-show-search
    searchButton.addEventListener('click', function (event) {
      event.preventDefault();
      // Добавляем активный класс .search-show для тега body
      document.body.classList.add('search-show');
    });
  }

  // Слушаем событие клика по документу
  document.addEventListener('click', function (event) {
    // Если клик был вне элемента .search__form и не по кнопке открытия поиска
    if (!searchForm.contains(event.target) && !searchButton.contains(event.target)) {
      // Удаляем активный класс .search-show у тега body
      document.body.classList.remove('search-show');
    }
  });
});
