<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

function sendEmail($to, $subject, $body) {
    $mail = new PHPMailer(true);
    try {
        // SMTP Settings
        $mail->isSMTP();
        $mail->Host = 'smtp.example.com'; // your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'yllimorina1982@gmail.com';
        $mail->Password = 'nvco rvtr wbtx uxcf';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Email settings
        $mail->setFrom('yllimorina1982@gmail.com', 'Cyber Tech');
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->isHTML(true);
        $mail->Body = $body;

        $mail->send();
        return true;
    } catch (Exception $e) {
        return false;
    }
}
?>
