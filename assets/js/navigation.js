// 🌙 Apply Dark Mode Before Rendering to Prevent Flash
if (localStorage.getItem("darkMode") === "true") {
    document.documentElement.classList.add("dark-mode"); // Apply instantly
}

// 🌍 Ensure Dark Mode is Applied After Page Loads
window.onload = function() {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    // ✅ Make page visible after determining dark mode
    document.documentElement.classList.add("loaded");
};

// 🎛️ Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
if(darkModeToggle){
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.documentElement.classList.toggle("dark-mode"); // Sync both
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });
}

// 📌 Toggle Mobile Menu
const menu = document.querySelector("nav ul");
const menuToggle = document.querySelector(".menu-toggle");
const menuLinks = document.querySelectorAll("nav ul li a");

function toggleMenu() {
    menu.classList.toggle("active");
}

// Attach event listener to menu toggle button
if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
}

// 📌 Close menu when a link is clicked (Prevents Duplicate Listeners)
if (menuLinks) {
    menuLinks.forEach((item) => item.addEventListener("click", () => menu.classList.remove("active")));
}

// Prevent automatic scrolling on assignments page
if (window.location.pathname.includes("assignments.html")) {
    const subjectLinks = document.querySelectorAll(".subject-link");
    subjectLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default anchor link behavior
            const targetId = link.getAttribute("href").substring(1); // Get the target ID
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly
            }
        });
    });
}

