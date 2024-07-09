document.addEventListener("DOMContentLoaded", function() {
  const detailsElements = document.querySelectorAll('.geo-mark');

  detailsElements.forEach((element) => {
      element.addEventListener('toggle', function() {
          if (element.open) {
              // Закрытие всех других элементов details
              detailsElements.forEach((otherElement) => {
                  if (otherElement !== element) {
                      otherElement.removeAttribute('open');
                  }
              });
          }
      });
  });
});
