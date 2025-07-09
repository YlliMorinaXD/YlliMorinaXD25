<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';  // Update path if needed

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.example.com';      // Set your SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'yllimorina1982@gmail.com';      // Your SMTP username
    $mail->Password   = 'nvco rvtr wbtx uxcf';          // Your SMTP password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('yllimorina1982@gmail.com', 'Cyber Tech');
    $mail->addAddress($_POST['email'], $_POST['firstname']);

    // Content
    $mail->isHTML(true);
    $mail->Subject = "Your Order Confirmation - Cyber Tech";
    $mail->Body    = $body;  // Your $body HTML content here

    $mail->send();
    echo "<script>alert('✅ Email sent successfully.'); window.location.href = 'thankyou.html';</script>";
} catch (Exception $e) {
    echo "<script>alert('❌ Message could not be sent. Mailer Error: " . addslashes($mail->ErrorInfo) . "'); window.history.back();</script>";
}
?>
