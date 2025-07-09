<?php

    require 'send_email.php';

$email = $_POST['email'];
$name = $_POST['name'];

$subject = "Your Order Confirmation - Cyber Tech";
$body = "
  <h3>Hello $name,</h3>
  <p>Thank you for your order! We'll notify you once it's shipped.</p>
  <p>Regards,<br>Cyber Tech Team</p>
";

sendEmail($email, $subject, $body);


?>