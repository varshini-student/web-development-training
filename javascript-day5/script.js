function validateForm() {
    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    // Name validation
    if (name === "") {
        alert("Name cannot be empty");
        return;
    }

    if (name.length < 3) {
        alert("Name must be at least 3 characters");
        return;
    }

    // Email validation
    if (email === "") {
        alert("Email cannot be empty");
        return;
    }

    // Success
    alert("Login successful! Welcome " + name);
}