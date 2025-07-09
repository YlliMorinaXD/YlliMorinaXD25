<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

function sendEmail($to, $subject, $bodyHtml) {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';       // Gmail SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'yllimorina1982@gmail.com'; // Your Gmail address
        $mail->Password = 'nvco rvtr wbtx uxcf';          // Use your Gmail App Password here, not normal password
        $mail->SMTPSecure = 'tls';             // TLS encryption
        $mail->Port = 587;                     // TLS port

        // Set the "from" email to match your authenticated user to avoid spoofing issues
        $mail->setFrom('yllimorina1982@gmail.com', 'Cyber Tech'); 

        $mail->addAddress($to);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $bodyHtml;

        // Optional: Bypass SSL verification (not recommended for production)
        /*
        $mail->SMTPOptions = [
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true,
            ],
        ];
        */

        $mail->send();
        echo '✅ Email sent successfully.';
    } catch (Exception $e) {
        echo "❌ Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}