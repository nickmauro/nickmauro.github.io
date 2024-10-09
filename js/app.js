// Variable
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.list-container');
let on_off = true;

const gallery = document.querySelectorAll('.gallery-content .img-card img');
const modal = document.querySelector('.modal');
const imgModal = document.querySelector('#imgModal');
const caption = document.querySelector('#caption');


// Responsive Menu
btnMenu.addEventListener('click', () => {
    if (on_off) {
        menu.style.left = "0";
        menu.style.transition = "300ms";
        on_off = false;
    } else {
        menu.style.left = "-100%";
        menu.style.transition = "300ms";
        on_off = true;
    }
});

// Gallery
gallery.forEach((image) => {
    image.addEventListener('click', (event) => {
        modal.style.display = "block"; // Muestra el modal

        let srcImg = event.target.src; // Obtiene la fuente de la imagen
        let descImg = event.target.getAttribute('data-desc'); // Obtiene la descripción

        imgModal.src = srcImg; // Establece la imagen en el modal
        caption.innerHTML = descImg; // Muestra la descripción en el modal
    });
});

// Close Modal
document.querySelector('#closeModal').addEventListener('click', () => {
    modal.style.display = "none"; // Oculta el modal al hacer clic
});
