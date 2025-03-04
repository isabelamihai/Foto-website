// Selectăm elementele necesare
const hamburger = document.getElementById('hamburger-menu');
const navContainer = document.querySelector('.nav-container'); // 

// Adăugăm un event listener pentru click pe meniul hamburger
hamburger.addEventListener('click', () => {
    navContainer.classList.toggle('active');
});


