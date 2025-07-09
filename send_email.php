<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'ttvgamestation2024@gamil.com'; // change this
    $mail->SMTPAuth = true;
    $mail->Username = 'yllimorina1982@gmail.com'; // change this
    $mail->Password = 'nvco rvtr wbtx uxcf'; // change this
    $mail->SMTPSecure = 'tls'; // or 'ssl'
    $mail->Port = 587;

    $mail->setFrom('your_email@example.com', 'Your Name');
    $mail->addAddress('recipient@example.com');

    $mail->isHTML(true);
    $mail->Subject = 'Test Email';
    $mail->Body    = 'This is a <b>test email</b> using PHPMailer without Composer.';

    $mail->send();
    echo '✅ Message has been sent';
} catch (Exception $e) {
    echo "❌ Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>



nvco rvtr wbtx uxcf