function initializeFormValidation() {
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector(".contact-form");
        if (!form) return; // Prevent errors if the form doesn't exist

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from submitting immediately

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Form submitted successfully!");
            form.reset();
        });
    });
}

// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Initialize form validation
initializeFormValidation();
