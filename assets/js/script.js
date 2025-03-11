const searchInput = document.querySelector('.content__container-search input'); // Champ de recherche
const rows = document.querySelectorAll('.content__container-list .row'); // Conteneurs de lignes

// Événement "input" pour filtrer les éléments de la liste
searchInput.addEventListener('input', searchContent);

function searchContent() {
    const searchValue = searchInput.value.toLowerCase(); // Texte saisi par l'utilisateur

    rows.forEach((row) => {
        let rowVisible = false;

        // Vérifie chaque élément de la ligne
        row.querySelectorAll('.element').forEach((element) => {
            const text = element.textContent.toLowerCase();
            const isMatch = text.includes(searchValue);

            // Affiche ou masque l'élément selon qu'il correspond ou non à la recherche
            element.style.display = isMatch ? 'block' : 'none';

            // Si au moins un élément correspond, marque la ligne comme visible
            if (isMatch) rowVisible = true;
        });

        // Affiche ou masque la ligne selon qu'elle contient des éléments visibles
        row.style.display = rowVisible ? 'flex' : 'none';
    });
}


const elements = document.querySelectorAll('.element');
const hoverImage = document.querySelector('.hover-image');
const displayedImage = document.getElementById('displayed-image');

elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        const imageSrc = element.getAttribute('data-image');
        displayedImage.src = 'assets/img/content/' + imageSrc;
        displayedImage.style.display = 'block';
        hoverImage.style.display = 'block';
    });
    element.addEventListener('mouseleave', () => {
        hoverImage.style.display = 'none';
        displayedImage.style.display = 'none';
    });
});
