document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll('.text-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    textElements.forEach(text => observer.observe(text));
});