// Simple form submission handling (for demonstration)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email && message) {
        alert('Message sent successfully!\nEmail: ' + email + '\nMessage: ' + message);
        // In a real-world scenario, you would send the form data to the server here.
    } else {
        alert('Please fill in all fields.');
    }
});
