const menuBurger = document.querySelector('.burger-menu');
const menuButton = document.querySelector('.burger-menu__button');
const menuList = document.querySelector('.burger-menu__list');

function showMenu() {
    menuList.classList.toggle('burger-menu__hide');
}

function closeMenu(evt) {
    const insideMenu = menuBurger.contains(evt.target);
    if (!insideMenu) {
        menuList.classList.add('burger-menu__hide');
    }
}

menuButton.addEventListener('click', showMenu);
document.addEventListener('click', closeMenu);