   const hamburger = document.getElementById('hamburger-menu');
const navContainer = document.getElementById('nav-container');

hamburger.addEventListener('click', () => {
    navContainer.classList.toggle('active');
});
