const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';  
        item.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.2)';  
        item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';  
    });

    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)'; 
        item.style.boxShadow = 'none';  
    });
});
