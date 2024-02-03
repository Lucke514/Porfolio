// --> Variables de la página 

// -> Header
const menuButton = document.getElementById('menu-button');
const menuItems = document.getElementById('menu-items');
menuItems.style.display = 'none';


//  --> Eventos
menuButton.addEventListener('click', () => {
    menuItems.style.display = menuItems.style.display === 'none' ? 'block' : 'none';
});

menuButton.addEventListener('blur', () => {
    menuItems.style.display = 'none';
});