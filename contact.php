<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    // Datele din formular
    $nume = htmlspecialchars($_POST['name']);
    $telefon = htmlspecialchars($_POST['phone']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $mesaj = htmlspecialchars($_POST['message']);

    try {
        // Setări server SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'contact@lauradanstudio.com'; // adresa ta
        $mail->Password = 'LauraDan01!';              // parola ta de la email
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Expeditor și destinatar
        $mail->setFrom($email, $nume); // Cine trimite
        $mail->addAddress('contact@lauradanstudio.com'); // Destinatar (tot tu)

        // Conținut email
        $mail->isHTML(false);
        $mail->Subject = 'Mesaj nou de pe site – LauraFoto';
        $mail->Body    = "Ai primit un mesaj nou:\n\n"
                       . "Nume: $nume\n"
                       . "Telefon: $telefon\n"
                       . "Email: $email\n\n"
                       . "Mesaj:\n$mesaj";

        $mail->send();
        header("Location: thanks.html");
        exit();
    } catch (Exception $e) {
        echo "Eroare la trimiterea emailului: {$mail->ErrorInfo}";
    }
} else {
    echo "Formular invalid.";
}
?>