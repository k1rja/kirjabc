const burgerMenu = document.querySelector('.burger-menu');
const topNav = document.querySelector('.nav__list');

burgerMenu.addEventListener('click', () => {
  topNav.classList.toggle('active');
});