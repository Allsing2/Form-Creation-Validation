document.addEventListener('DOMContentLoaded', function() {
    // Form Selection: Select the form with id="registration-form"
    const form = document.getElementById('registration-form');

    // Feedback Division Selection: Select the division where feedback will be displayed
    const feedbackDiv = document.getElementById('form-feedback');

    // Form Submission Event Listener: Add an event listener to form for the ‘submit’ event.
    form.addEventListener('submit', function(event) {
        // Prevent form submission: Crucial for client-side validation
        event.preventDefault();

        // Input Retrieval and Trimming:
        // Retrieve .value property and apply .trim() to remove whitespace.
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize Validation Variables:
        let isValid = true; // Tracks overall validation status
        const messages = []; // Stores validation error messages

        // Username Validation: Check if username.length is less than 3
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation: Check if email includes both ‘@’ and ‘.’ characters
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Email must include both '@' and '.' characters.");
        }

        // Password Validation: Ensure password.length is at least 8
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Displaying Feedback:
        // Make feedbackDiv visible
        feedbackDiv.style.display = "block";

        // Feedback Display Logic:
        if (isValid) {
            // If isValid remains true, set textContent to "Registration successful!" and color
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color for success
            // Optionally, you might submit the form here if it were truly valid and not just for demo
            // form.submit();
        } else {
            // If isValid is false, join messages with <br> and assign to innerHTML
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545"; // Red color for errors
        }
    });
});