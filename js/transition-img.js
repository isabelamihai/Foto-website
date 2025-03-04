document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.image-container img');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 🔥 Oprește observarea după ce imaginea devine vizibilă
            }
        });
    }, { threshold: 0.3, rootMargin: "50px" });

    images.forEach(image => observer.observe(image));
});
