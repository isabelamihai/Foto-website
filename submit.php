<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Preluăm datele din formular și le securizăm
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    // Adresa clientei (înlocuiește cu adresa reală)
    $to = "lauradan2@yahoo.com";

    // Subiectul emailului
    $subject = "Mesaj nou de pe site";

    // Conținutul emailului
    $body = "Ai primit un mesaj nou de la: \n\n";
    $body .= "Nume: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Mesaj:\n$message\n";

    // Header pentru email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Trimitem emailul și verificăm dacă a fost expediat
    if (mail($to, $subject, $body, $headers)) {
        echo "Mesajul a fost trimis cu succes!";
    } else {
        echo "Eroare! Mesajul nu a fost trimis.";
    }
} else {
    echo "Acces neautorizat!";
}
?>
