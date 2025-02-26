document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert("Click dreapta este dezactivat. Toate drepturile sunt rezervate.");
});

document.addEventListener('copy', function(event) {
    event.preventDefault();
    alert("Functia copiere este dezactivata. Toate drepturile sunt rezervate.");
});

document.addEventListener('dragstart', function(event) {
    event.preventDefault();
    alert("Drag and drop este dezactivat. Toate drepturile sunt rezervate.");
});

let style = window.getComputedStyle(event.target);
    if (style.backgroundImage !== "none") {
        event.preventDefault();
        alert("Click dreapta pe imagini este dezactivat. Toate drepturile sunt rezervate.");
    }

document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'));
document.querySelectorAll('a').forEach(a => a.setAttribute('draggable', 'false'));