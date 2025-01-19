const form = document.querySelector("form");

// Function to handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Capture form data
    const formData = {
        country: document.getElementById("country").value,
        role: document.querySelector('input[name="role"]:checked').value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        companyName: document.getElementById("company-name").value,
        fullName: document.getElementById("full-name").value,
        phone: document.getElementById("phone").value,
        termsAccepted: document.getElementById("terms").checked,
    };

    // Convert form data to JSON format
    const jsonData = JSON.stringify(formData, null, 2);

    // Output JSON to console (for testing purposes)
    console.log(jsonData);

    // Example: Store JSON in Local Storage
    localStorage.setItem("registrationData", jsonData);

    // Optionally, display a success message
    alert("Form data saved in JSON format. Check the console!");
});

if (formData.role === "seller") {
    window.location.href = "../seller/seller.html"; // Redirect to the seller page
} else if (formData.role === "buyer") {
    window.location.href = "../buyer/buyer.html"; // Redirect to the buyer page
}