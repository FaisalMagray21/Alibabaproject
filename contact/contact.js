// JavaScript to handle the form submission
document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Capture the form data (for now, we just show an alert)
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Display an alert with the captured data
        alert(
            `Thank you for your message, ${name}! We will respond to you shortly.`
        );

        // Optionally, you can reset the form after submission
        document.getElementById("contactForm").reset();
    });