// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productItem = `
            <div class="col-md-4">
                <div class="card product-card">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Price: $${product.price}</p>
                        <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productList.insertAdjacentHTML('beforeend', productItem);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        cart.push(product);
        updateCartButton();
    }
}

// Function to update cart button text
function updateCartButton() {
    const cartButton = document.getElementById('cart');
    cartButton.textContent = `Cart (${cart.length})`;
}

// Function to display cart items
function displayCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const cartItem = `
            <div>${item.name} - $${item.price}</div>
        `;
        cartItemsList.insertAdjacentHTML('beforeend', cartItem);
    });
}

// Initialize cart
let cart = [];

// Event listener for Add to Cart button
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        addToCart(productId);
    }
});

// Event listener for Cart button
document.getElementById('cart').addEventListener('click', function() {
    displayCart();
    $('#cartModal').modal('show');
});

// Event listener for Checkout button
document.getElementById('checkout').addEventListener('click', function() {
    // Implement Stripe Checkout process
    // This would involve collecting payment information and processing the payment
    // For simplicity, let's just display an alert
    alert('Secure checkout process would be implemented here.');
});

// Display initial products
displayProducts();
