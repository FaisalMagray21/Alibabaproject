const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve stored user data
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Validate email and password
    if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
    ) {
        alert("Login successful!");

        // Redirect based on role
        if (storedUser.role === "seller") {
            window.location.href = "../seller/seller.html"; // Redirect to seller page
        } else if (storedUser.role === "buyer") {
            window.location.href = "../buyer/buyer.html"; // Redirect to buyer page
        }
    } else {
        alert("Invalid email or password!");
    }
});