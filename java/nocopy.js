document.addEventListener("contextmenu", function (event) {
    // Verifică dacă este o imagine <img>
    if (event.target.tagName === "IMG") {
        event.preventDefault();
        alert("Click dreapta pe imagini este dezactivat.");
    }

    // Verifică dacă elementul are background-image
    let style = window.getComputedStyle(event.target);
    if (style.backgroundImage !== "none") {
        event.preventDefault();
        alert("Click dreapta pe imaginile de fundal este dezactivat.");
    }
});