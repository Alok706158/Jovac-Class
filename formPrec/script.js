//form1 code

const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Inputs
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("emailId");
    const phone = document.getElementById("phoneNo");
    const dob = document.getElementById("dob");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    // First Name
    if (firstName.value.trim() === "") {
        alert("Please enter First Name");
        firstName.focus();
        return;
    }

    // Last Name
    if (lastName.value.trim() === "") {
        alert("Please enter Last Name");
        lastName.focus();
        return;
    }

    // Email
    if (email.value.trim() === "") {
        alert("Please enter Email");
        email.focus();
        return;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid Email");
        email.focus();
        return;
    }

    // Phone
    const phonePattern = /^[6-9]\d{9}$/;

    if (!phonePattern.test(phone.value)) {
        alert("Please enter a valid 10-digit Phone Number");
        phone.focus();
        return;
    }

    // Date of Birth
    if (dob.value === "") {
        alert("Please select Date of Birth");
        dob.focus();
        return;
    }

    // Gender
    if (!gender) {
        alert("Please select Gender");
        return;
    }

    // Password
    if (password.value.length < 8) {
        alert("Password must be at least 8 characters");
        password.focus();
        return;
    }

    // Confirm Password
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match");
        confirmPassword.focus();
        return;
    }

    // Terms
    if (!terms.checked) {
        alert("Please accept Terms & Conditions");
        return;
    }

    // Success
    alert("🎉 Registration Successful!");

    form.reset();
});