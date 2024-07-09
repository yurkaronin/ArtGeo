document.addEventListener("DOMContentLoaded", function () {
  const navigationBlock = document.querySelector(".mobile-navigation");
  if (navigationBlock) {
    navigationBlock.addEventListener("click", function (event) {
      const target = event.target.closest(".accordion-menu__head");
      if (target) {
        event.preventDefault();
        const item = target.closest(".accordion-menu");
        if (item) {
          item.classList.toggle("isOpen");
        }
      }
    });
  }
});
