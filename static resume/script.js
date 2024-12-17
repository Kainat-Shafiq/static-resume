// Simple JS to display current year in footer
document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer .container p");
    const currentYear = new Date().getFullYear();
    footer.innerHTML += ` | © ${currentYear} Your Name`;
});
