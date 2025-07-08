<?php
session_start();

// Check if the cart is empty
if (empty($_SESSION['cart'])) {
    echo "Your cart is empty!";
} else {
    echo "<h2>Your Cart</h2>";
    foreach ($_SESSION['cart'] as $product) {
        echo "<p>{$product['name']} - \${$product['price']}</p>";
    }
    echo "<a href='checkout.php'>Proceed to Checkout</a>";
}
?>

