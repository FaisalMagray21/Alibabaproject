// Select elements
const addProductForm = document.getElementById("add-product-form");
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");

// Product array to store products added by seller
let products = [];

// Cart array to store cart details (Simulated for the seller view)
let cart = [];

// Function to display products added by the seller
function displayProducts() {
    productList.innerHTML = ""; // Clear previous products
    products.forEach((product) => {
        const productItem = document.createElement("li");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-name">${product.name}</div>
            <div class="product-price">$${product.price}</div>
            <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productItem);

        // Event listener to add the product to cart
        const addToCartBtn = productItem.querySelector(".add-to-cart-btn");
        addToCartBtn.addEventListener("click", function() {
            addToCart(product.id);
        });
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);

    if (product) {
        cart.push(product);
        displayCart();
    }
}

// Function to display the cart
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

// Function to handle product form submission
addProductForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById("product-name").value;
    const price = parseFloat(document.getElementById("product-price").value);
    const imageFile = document.getElementById("product-image").files[0];
    const imageURL = URL.createObjectURL(imageFile);

    // Generate unique product ID
    const productId = new Date().getTime();

    // Add product to products array
    const newProduct = { id: productId, name, price, image: imageURL };
    products.push(newProduct);

    // Display updated product list
    displayProducts();

    // Reset form
    addProductForm.reset();
});

// Display initial products (empty list to start)
displayProducts();