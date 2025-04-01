const textArray = ['a Computer Engineer', 'an Innovator', 'a Gamer', 'a Hobbyist', 'a Tech Enthusiast'];
let currentIndex = 0;
let letterIndex = 0;
let currentText = '';
const typingElement = document.getElementById('typing');

function typeText() {
    currentText = textArray[currentIndex];
    typingElement.textContent = `I'm ${currentText.slice(0, letterIndex)}`;

    if (letterIndex < currentText.length) {
        letterIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    typingElement.textContent = `I'm ${currentText.slice(0, letterIndex)}`;

    if (letterIndex > 0) {
        letterIndex--;
        setTimeout(eraseText, 50);
    } else {
        currentIndex = (currentIndex + 1) % textArray.length;
        setTimeout(typeText, 500);
    }
}

typeText();

// // Get the button
// let backToTopButton = document.getElementById("back-to-top-btn");

// // When the user scrolls, check position
// window.addEventListener("scroll", function () {
//     if (window.scrollY > 100) {
//         backToTopButton.style.display = "block";
//     } else {
//         backToTopButton.style.display = "none";
//     }
// });

// // Smooth scroll to top when clicked
// backToTopButton.addEventListener("click", function () {
//     window.scrollTo({ top: 0, behavior: "smooth" });
// });


// When the user scrolls down from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopButton.addEventListener("click", function () {
    // For Safari
    document.body.scrollTop = 0;
    // For Chrome, Firefox, IE and Opera
    document.documentElement.scrollTop = 0;
});