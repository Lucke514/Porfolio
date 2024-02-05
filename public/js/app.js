// --> Variables de la página 

// -> Header
const menuButton = document.getElementById('menu-button');
const menuItems = document.getElementById('menu-items');
menuItems.style.display = 'none';


//  --> Eventos

// -> Header
menuButton.addEventListener('click', () => {
    menuItems.style.display = menuItems.style.display === 'none' ? 'block' : 'none';
});

menuItems.addEventListener('focusout' , ()  => {
    menuItems.style.display = 'none';
})

document.addEventListener('click', function(e) {
    const targetElement = e.target; 
    const menuIsVisible = menuItems.style.display === 'block';

    // Verifica si el clic fue fuera del menú y del botón que lo controla, y si el menú está visible
    if (menuIsVisible && !menuButton.contains(targetElement) && !menuItems.contains(targetElement)) {
        menuItems.style.display = 'none';
    }
});

// --> Funciones

// -> Footer
