<?php
session_start();

// Example: Fallback test data (REMOVE in real site)
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [
        ['name' => 'Gaming Mouse', 'price' => 50, 'quantity' => 1],
        ['name' => 'Mechanical Keyboard', 'price' => 120, 'quantity' => 1]
    ];
}
?>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Checkout Form</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  font-family: Arial, sans-serif;
  font-size: 17px;
  padding: 8px;
  background-color: #f5f5f5;
  margin: 0;
}

* {
  box-sizing: border-box;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  flex: 25%;
}

.col-50 {
  flex: 50%;
}

.col-75 {
  flex: 75%;
}

.col-25, .col-50, .col-75 {
  padding: 0 16px;
}

.container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin-top: 20px;
}

input[type=text], input[type=email] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 10px 0;
  font-size: 24px;
}

.btn {
  background-color: #04AA6D;
  color: white;
  padding: 12px;
  margin-top: 10px;
  border: none;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
  background-color: #45a049;
}

a {
  color: #2196F3;
  text-decoration: none;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}

h2 {
  text-align: center;
  margin-top: 20px;
}

@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>
</head>
<body>

<h2>Responsive Checkout Form</h2>
<p style="text-align:center;">Resize the browser window to see the responsive effect.</p>

<div class="row">
  <div class="col-75">
    <div class="container">
      <form method="post" action="checkout_process.php">
        <div class="row">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Nolan" required>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="email" id="email" name="email" placeholder="email@example.com" required>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="1234 Main St" required>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="City" required>

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="State" required>
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="Zip" required>
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style="color:navy;"></i>
              <i class="fa fa-cc-amex" style="color:blue;"></i>
              <i class="fa fa-cc-mastercard" style="color:red;"></i>
              <i class="fa fa-cc-discover" style="color:orange;"></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe" required>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" required>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September" required>
            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2030" required>
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352" required>
              </div>
            </div>
          </div>
        </div>

        <label>
          <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
        </label>
        <input type="submit" value="Confirm Order" class="btn">
      </form>
    </div>
  </div>

  <div class="col-25">
    <div class="container">
      <h4>Cart 
        <span class="price" style="color:black">
          <i class="fa fa-shopping-cart"></i> 
          <b><?= isset($_SESSION['cart']) ? count($_SESSION['cart']) : 0 ?> items</b>
        </span>
      </h4>
      <hr>
      <?php
      $total = 0;
      if (isset($_SESSION['cart']) && is_array($_SESSION['cart'])) {
          foreach ($_SESSION['cart'] as $item) {
              echo "<p>{$item['name']} <span class='price'>$ {$item['price']}</span></p>";
              $total += $item['price'] * ($item['quantity'] ?? 1);
          }
      } else {
          echo "<p>Your cart is empty.</p>";
      }
      ?>
      <hr>
      <p>Total <span class="price" style="color:black"><b>$ <?= number_format($total, 2) ?></b></span></p>
    </div>
  </div>
</div>

</body>
</html>
