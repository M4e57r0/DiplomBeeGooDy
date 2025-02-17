// Кнопка "Наверх"

let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// Скролл

let links = document.querySelectorAll("nav a");

links.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        let targetId = this.getAttribute("href").slice(1);
        let targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth"
        });
    });
});
