const menuBurger = document.querySelector('.menu-burger');
const menu = document.querySelector('.header__menu');
const body = document.body;
const menuLinks = document.querySelectorAll('.menu__link');

menuBurger.addEventListener('click', function () {
    if (this.classList.contains('active')) {
        closeMenu();
    } else {
        menu.classList.add('active');
        this.classList.add('active');
        body.classList.add('lock');
    }
});

menuLinks.forEach(function (item) {
    item.addEventListener('click', function (event) {
        closeMenu();
    });
});

function closeMenu () {
    menu.classList.remove('active');
    menuBurger.classList.remove('active');
    body.classList.remove('lock');
}

