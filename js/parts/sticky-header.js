let lastKnownScrollY = 0;
let ticking = false;

function updateActiveMenuSection() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const sections = document.querySelectorAll("section");
  const menuLinks = getCurrentMenuLinks();

  let currentActive = null;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentActive = section.getAttribute('id');
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentActive}`) {
      link.classList.add('active');
    }
  });
}

function getCurrentMenuLinks() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 1023) {
    return document.querySelectorAll('.mobile-navigation__link');
  } else {
    return document.querySelectorAll('.main-navigation__link');
  }
}

function headerChange() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 10) {
    document.body.classList.add("header-sticky");
  } else {
    document.body.classList.remove("header-sticky");
  }
  updateActiveMenuSection();
  ticking = false;
}

function onScroll() {
  lastKnownScrollY = window.scrollY;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(headerChange);
  }
  ticking = true;
}

function onResize() {
  clearTimeout(window.resizeDebounce);
  window.resizeDebounce = setTimeout(() => {
    updateActiveMenuSection();
  }, 100);
}

headerChange();
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onResize);
