document.addEventListener('DOMContentLoaded', function () {
    // Dezactivează meniul click dreapta / long-press
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        alert("Click dreapta este dezactivat. Toate drepturile sunt rezervate.");
    });

    // Dezactivează funcția de copiere (CTRL+C, Copy din meniu)
    document.addEventListener('copy', function (event) {
        event.preventDefault();
        alert("Copierea este dezactivată.");
    });

    // Dezactivează drag & drop pentru imagini și link-uri
    document.addEventListener('dragstart', function (event) {
        event.preventDefault();
        alert("Drag and drop este dezactivat.");
    });

    document.querySelectorAll('img, a').forEach(el => el.setAttribute('draggable', 'false'));

    // Dezactivează selectarea textului
    document.documentElement.style.userSelect = 'none';

    // // Dezactivează long-press pe mobil pentru imagini
    // document.querySelectorAll('img').forEach(img => {
    //     img.addEventListener('touchstart', function (event) {
    //         event.preventDefault();
    //     }, { passive: false });
    // });
});
