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


// темная тема

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    function updateTheme() {
        const isDark = body.classList.contains("dark-theme");
        document.querySelectorAll(".accordion-item, .accordion-button, .accordion-body").forEach(el => {
            el.style.backgroundColor = isDark ? "#1e1e1e" : "#F2F3F5";
            el.style.color = isDark ? "#ffffff" : "#000000";
        });
    }

    // Установить тему из localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
        themeToggle.textContent = "☀️";
        updateTheme();
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
        themeToggle.textContent = body.classList.contains("dark-theme") ? "☀️" : "🌙";
        updateTheme();
    });
});


