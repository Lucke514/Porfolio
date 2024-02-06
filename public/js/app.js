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

// -> Header

// -> Contact
const contactForm = document.getElementById('formulario-contacto');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const message = document.getElementById('message').value; 

    // enviar la informacion a la base de datos
    fetch('/contacto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, apellido, email, telefono, message })
    })
    .then(res => res.json())
    .then(data => {
        if (data.ok) {
            alert('Mensaje enviado correctamente');
        } else {
            alert('Error al enviar el mensaje');
        }
    })

});

// -> Footer
