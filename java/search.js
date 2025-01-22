function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('active');
}

function search() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        alert(`Căutare pentru: ${query}`);
    }
    toggleSearch(); // Închide bara de căutare după ce utilizatorul a căutat
}
