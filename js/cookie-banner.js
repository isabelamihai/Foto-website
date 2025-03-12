document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("cookiesAccepted") === "true") return;

    let banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.className = "cookie-banner";
    banner.innerHTML = `
        <p>Acest site folosește cookie-uri pentru a îmbunătăți experiența utilizatorului. <a href="/privacy.html">Află mai multe</a></p>
        <button id="accept-cookies">Accept</button>
        <button id="decline-cookies">Refuz</button>
    `;

    document.body.appendChild(banner);

    document.getElementById("accept-cookies").addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        banner.style.display = "none";
    });

    document.getElementById("decline-cookies").addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "false");
        banner.style.display = "none";
    });
});
