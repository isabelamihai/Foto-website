document.addEventListener("contextmenu", function (event) {
    // Verifică dacă este o imagine <img>
    if (event.target.tagName === "IMG") {
        event.preventDefault();
        alert("Click dreapta pe imagini este dezactivat. Toate drepturile sunt rezervate.");
    }

    // Verifică dacă elementul are background-image
    let style = window.getComputedStyle(event.target);
    if (style.backgroundImage !== "none") {
        event.preventDefault();
        alert("Click dreapta pe imagini este dezactivat. Toate drepturile sunt rezervate.");
    }
});