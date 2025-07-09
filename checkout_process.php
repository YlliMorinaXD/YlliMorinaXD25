<?php
require 'send_email.php';  // Ensure path is correct

$email = $_POST['email'];
$name = $_POST['firstname'];

$subject = "Your Order Confirmation - Cyber Tech";
$body = "
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; font-size: 14px; color: #333; margin: 0; padding: 0; }
    .container { width: 600px; margin: auto; background: #fff; border: 1px solid #ddd; padding: 20px; }
    .header { text-align: center; margin-bottom: 20px; }
    .logo { max-width: 150px; }
    .order-status { background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold; margin: 20px 0; }
    .section-title { margin-top: 20px; font-weight: bold; }
    table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }
    .price { text-align: right; }
    .highlight { font-weight: bold; color: #e60000; }
    .footer { margin-top: 30px; font-size: 12px; color: #777; text-align: center; }
    .social-icons img { width: 24px; height: 24px; margin: 0 6px; }
    .bottom-line { margin-top: 15px; color: #aaa; font-size: 12px; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <img class='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Logo_C.svg/1024px-Logo_C.svg.png' alt='Cyber Tech Logo' />
      <h2>Cyber Tech</h2>
    </div>
    
    <p>Hello $name,</p>
    <p>Thank you for your order from Cyber Tech!</p>
    <p><strong>Your order has been received.</strong></p>
    <p>Once the product is confirmed in stock, we’ll proceed to shipping. You’ll receive further updates.</p>

    <div class='order-status'>
      Order Number: <strong>#100001</strong><br>
      Estimated Delivery: <strong>10 Korrik - 11 Korrik</strong>
    </div>

    <div class='section-title'>Product Details</div>
    <table>
      <tr>
        <td><img src='Intel Core i9-14900K.jpg' alt='Intel Core i9' /></td>
        <td>
          Intel Core i9-14900K <br>
          Quantity: 1
        </td>
        <td class='price'><strong>575.66 €</strong></td>
      </tr>
    </table>

    <div class='section-title'>Summary</div>
    <table>
      <tr><td>Subtotal:</td><td class='price'>575.66 €</td></tr>
      <tr><td>Product Discount:</td><td class='price'>0.00 €</td></tr>
      <tr><td>Shipping:</td><td class='price'>0.00 €</td></tr>
      <tr><td>Promo Discount + Shipping:</td><td class='price'>0.00 €</td></tr>
      <tr><td class='highlight'>Total:</td><td class='price highlight'>575.66 €</td></tr>
    </table>

    <div class='section-title'>Shipping Address</div>
    <p>
      Ylli Morina<br>
      Lagjia Qëndresa, Rruga Sefedin Vitia<br>
      Prishtinë, Kosovë<br>
      yllimorina1982@gmail.com<br>
      049356116
    </p>

    <div class='section-title'>Billing Address</div>
    <p>
      Ylli Morina<br>
      Lagjia Qëndresa, Rruga Sefedin Vitia<br>
      Prishtinë, Kosovë<br>
      yllimorina1982@gmail.com<br>
      049356116
    </p>

    <p><strong>Shipping Method:</strong> STANDARD - Free Shipping</p>
    <p><strong>Payment Method:</strong> Payment Completed</p>

    <div class='footer'>
      <p>Thank you for shopping with Cyber Tech!</p>
      
      <div class='social-icons'>
        <a href='https://facebook.com' style='font-size: 20px; text-decoration: none;'>
  <i class='fa fa-facebook' aria-hidden='true'></i>
</a>

        <a href='https://twitter.com'><img src='https://cdn-icons-png.flaticon.com/512/145/145812.png' alt='Twitter'></a>
        <a href='https://tiktok.com'><img src='https://cdn-icons-png.flaticon.com/512/3046/3046121.png' alt='TikTok'></a>
        <a href='https://instagram.com'><img src='https://cdn-icons-png.flaticon.com/512/2111/2111463.png' alt='Instagram'></a>
      </div>

      <div class='bottom-line'>
        © 2025 Cyber Tech. All rights reserved.
      </div>
    </div>
  </div>
</body>
</html>
";

sendEmail($email, $subject, $body);
?>
