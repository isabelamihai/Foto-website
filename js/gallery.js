document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close");
    const prevButton = document.querySelector('.lightbox .prev');
    const nextButton = document.querySelector('.lightbox .next');
    
    let currentImageIndex = 0;
    const images = Array.from(galleryItems).map(item => item.getAttribute("data-full"));

    galleryItems.forEach((item, index) => {
        item.addEventListener("click", function () {
            const imgSrc = item.getAttribute("data-full");
            lightboxImg.src = imgSrc;  // Actualizăm sursa imaginii din lightbox
            lightbox.style.display = "flex";
            currentImageIndex = index;  // Setăm indexul imaginii curente
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Închidere lightbox la click în afara imaginii
    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });

    // Funcție pentru a merge la imaginea precedentă
    function prevImage() {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        lightboxImg.src = images[currentImageIndex];  // Actualizăm sursa imaginii pentru prev
    }

    // Funcție pentru a merge la imaginea următoare
    function nextImage() {
        currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        lightboxImg.src = images[currentImageIndex];  // Actualizăm sursa imaginii pentru next
    }

    prevButton.addEventListener('click', function (e) {
        e.stopPropagation(); // Previne închiderea lightbox-ului când dai click pe prev
        prevImage();
    })
    nextButton.addEventListener('click', function (e) {
        e.stopPropagation(); // Previne închiderea lightbox-ului când dai click pe next
        nextImage();
    })
});
