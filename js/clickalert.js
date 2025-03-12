document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert("Click dreapta este dezactivat. Toate drepturile sunt rezervate.");

    let style = window.getComputedStyle(event.target);
    if (style.backgroundImage !== "none") {
        alert("Click dreapta este dezactivat pe imagini.");
    }
});

document.addEventListener('copy', function(event) {
    event.preventDefault();
    alert("Functia copiere este dezactivata. Toate drepturile sunt rezervate.");
});

document.addEventListener('dragstart', function(event) {
    event.preventDefault();
    alert("Drag and drop este dezactivat. Toate drepturile sunt rezervate.");
});

// Dezactivează drag pentru imagini și link-uri
document.querySelectorAll('img, a').forEach(el => el.setAttribute('draggable', 'false'));
// Dezactivează selectarea textului
document.body.style.userSelect = 'none';