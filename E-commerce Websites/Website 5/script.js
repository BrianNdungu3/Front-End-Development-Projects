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
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productItem);
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
    const cartButton = document.getElementById('cart-btn');
    cartButton.innerText = `Cart (${cart.length})`;
}

// Function to display cart items
function displayCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(cartItem);
    });
}

// Initialize cart
let cart = [];

// Event listener for Add to Cart button
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        addToCart(productId);
    }
});

// Event listener for Cart button
document.getElementById('cart-btn').addEventListener('click', function() {
    displayCart();
    document.getElementById('cart-modal').style.display = 'block';
});

// Event listener for Close button in Cart modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'none';
});

// Event listener for Checkout button
document.getElementById('checkout-btn').addEventListener('click', function() {
    // Implement secure checkout process (e.g., using Stripe)
    alert('Secure checkout process would be implemented here.');
});

// Display initial products
displayProducts();
