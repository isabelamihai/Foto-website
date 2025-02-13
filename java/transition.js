document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.image-container img');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Opțional, dacă vrei să dispară la ieșire
            }
        });
    }, { threshold: 0.3, rootMargin: "50px" });

    images.forEach(image => observer.observe(image));
});
