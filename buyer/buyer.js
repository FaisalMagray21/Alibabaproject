// Select elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");

// Get products and cart from localStorage
let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display products added by seller
function displayProducts() {
    productList.innerHTML = ""; // Clear previous products
    products.forEach((product) => {
        const productItem = document.createElement("li");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-name">${product.name}</div>
            <div class="product-price">$${product.price}</div>
        `;
        productList.appendChild(productItem);
    });
}

// Function to display the cart (products added by the buyer)
function displayCart() {
    cartList.innerHTML = ""; // Clear previous cart items
    cart.forEach((cartItem) => {
        const cartItemElement = document.createElement("li");
        cartItemElement.innerHTML = `
            <img src="${cartItem.image}" alt="${cartItem.name}">
            <div class="product-name">${cartItem.name}</div>
            <div class="product-price">$${cartItem.price}</div>
        `;
        cartList.appendChild(cartItemElement);
    });
}

// Initial display of products and cart
displayProducts();
displayCart();