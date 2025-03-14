console.log("Lightbox:", document.querySelector(".lightbox"));
console.log("Gallery items:", document.querySelectorAll(".gallery-item"));

window.addEventListener("load", function () {
    console.log("Window fully loaded");

    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close");
    const prevButton = document.querySelector('.lightbox .prev');
    const nextButton = document.querySelector('.lightbox .next');

    let currentImageIndex = 0;
    const images = Array.from(galleryItems).map(item => item.getAttribute("data-full"));

    galleryItems.forEach((item, index) => {
        item.addEventListener("click", function (e) {
            e.stopPropagation();
            console.log("Imagine apăsată:", item.getAttribute("data-full"));
            const imgSrc = item.getAttribute("data-full");

            if (!imgSrc) {
                console.error("Imagine lipsă pentru index:", index);
                return;
            }

            lightboxImg.src = imgSrc;
            lightbox.style.display = "flex";
            currentImageIndex = index;
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });

    function prevImage() {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        lightboxImg.src = images[currentImageIndex];
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        lightboxImg.src = images[currentImageIndex];
    }

    prevButton.addEventListener('click', function (e) {
        e.stopPropagation();
        prevImage();
    });

    nextButton.addEventListener('click', function (e) {
        e.stopPropagation();
        nextImage();
    });
});
