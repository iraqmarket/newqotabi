const menuOpen = document.getElementById('menu-open');
const menuClose = document.querySelectorAll('.menu-close');
const menu = document.querySelector('.mobile-menu');

menuOpen.addEventListener('click', () => menu.classList.add('show'));
menuClose.forEach((item) => {
  item.addEventListener('click', () => menu.classList.remove('show'));
});
