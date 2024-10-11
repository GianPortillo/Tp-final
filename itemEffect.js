const items = document.querySelectorAll('.item');

// Añadir evento cuando el mouse entra en el elemento
items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';  // Crecimiento del artículo
        item.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.2)';  // Sombra para destacar el artículo
        item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';  // Transición suave
    });

    // Añadir evento cuando el mouse sale del elemento
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';  // Volver al tamaño original
        item.style.boxShadow = 'none';  // Eliminar sombra
    });
});
