let cart = [];

// Function to add product to cart
function addToCart(productName, price) {
    let product = cart.find(item => item.name === productName);
    
    if (product) {
        if (product.quantity < 10) {
            product.quantity++;
        } else {
            alert('Maximum quantity for this product is 10.');
        }
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    // Update local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart view
    updateCart();
    alert(`${productName} added to cart.`);
}

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    cartItemsContainer.innerHTML = ''; // Clear existing cart items
    let totalPrice = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <p>${item.name} - $${item.price} x ${item.quantity}</p>
        `;
        cartItemsContainer.appendChild(itemDiv);
        totalPrice += item.price * item.quantity;
    });

    totalPriceContainer.textContent = totalPrice;
}

// Function to handle checkout (redirect to checkout page)
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add some products before proceeding to checkout.');
    } else {
        // Redirect to checkout page (you need to create checkout.html)
        window.location.href = 'checkout.html';
    }
}

// Load cart from local storage and update the cart display
window.onload = function() {
    cart = JSON.parse(localStorage.getItem('cart.html')) || [];
    updateCart();
};
