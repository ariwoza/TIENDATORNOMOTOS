const subcategorias = document.querySelectorAll('.subcategorias');
const otros = document.querySelectorAll('.cat')
subcategorias.forEach((subcat) => {
    subcat.addEventListener('click', (ch) => {
        ch.preventDefault();
        subcategorias.forEach((subcategorias) => cat.classList.remove('activo'));
        ch.target.classList.add('activo');

        const try = ch.target.innerHTML.toLowerCase();
         grid.filter(`[data-subcategoria="${try}"]`);
    });
});