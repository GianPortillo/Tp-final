document.getElementById('search').addEventListener('keyup', function () {
    const searchValue = this.value.toLowerCase();
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const title = item.getAttribute('data-title').toLowerCase();
        if (title.includes(searchValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
