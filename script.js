/* =========================================================
   MAS STUDIO — JAVASCRIPT
   ========================================================= */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 900);

});


/* ================= NAVBAR ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= BACK TO TOP ================= */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".service-card, .about-content, .about-image, .gallery-item, .contact-card, .experience-content"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    observer.observe(element);
});


/* ================= SERVICE HOVER ================= */

document.querySelectorAll(".service-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.borderColor =
            "rgba(200,166,106,.65)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.borderColor =
            "rgba(200,166,106,.25)";

    });

});


/* ================= PARALLAX HERO ================= */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        hero.style.backgroundPosition =
            `center ${scrollPosition * 0.15}px`;

    }

});