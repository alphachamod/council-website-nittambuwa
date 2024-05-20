// Slider Action Arrows

const slider = document.querySelector('.slider');
function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}
document.addEventListener('click', activate, false);


// Login



// Register

document.getElementById("MainForm").addEventListener("submit", function(event) {
    let valid = true;

    // Validate first and last name
    const fName = document.getElementById("fNameInput").value;
    const lName = document.getElementById("lNameInput").value;
    if (fName.trim() === "" || lName.trim() === "") {
        alert("First and Last names are required.");
        valid = false;
    }

    // Validate email
    const email = document.getElementById("emailInput").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    // Validate addresses
    const add1 = document.getElementById("add1").value;
    const postcode = document.getElementById("postcode").value;
    if (add1.trim() === "" || postcode.trim() === "") {
        alert("Address Line 1 and Post Code are required.");
        valid = false;
    }

    // Validate passwords
    const password = document.getElementById("passwordInput").value;
    const confirmPassword = document.getElementById("repasswordInput").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        valid = false;
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});


