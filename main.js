const exampleModal = document.getElementById('exampleModal');

if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget;
    
    // Clonar el contenido del carrusel de la tarjeta al carrusel del modal
    const cardCarousel = button.closest('.project-card').querySelector('.carousel-inner');
    const modalCarousel = exampleModal.querySelector('.carousel-inner');

    // Limpiar contenido existente en el carrusel del modal
    modalCarousel.innerHTML = '';

    // Clonar cada elemento de la tarjeta al carrusel del modal
    cardCarousel.querySelectorAll('.carousel-item').forEach(cardItem => {
      const modalItem = cardItem.cloneNode(true);
      modalCarousel.appendChild(modalItem);
    });

    // Actualizar el título del modal
    const recipient = button.getAttribute('data-bs-whatever');
    const modalTitle = exampleModal.querySelector('.modal-title');
    modalTitle.textContent = recipient;
  });
}