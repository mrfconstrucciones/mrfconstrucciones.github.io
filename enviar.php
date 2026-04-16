<?php
// enviar.php - Procesador seguro de formulario (ejecuta PHP, no muestra código)
// El código PHP se ejecuta correctamente cuando se abre desde servidor HTTP (hosting o php -S)

// Verificar método POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: contacto.html?error=1');
    exit;
}

// Sanitizar datos
$nombre = trim(htmlspecialchars($_POST['nombre'] ?? '', ENT_QUOTES, 'UTF-8'));
$apellido = trim(htmlspecialchars($_POST['apellido'] ?? '', ENT_QUOTES, 'UTF-8'));
$email = trim(htmlspecialchars($_POST['email'] ?? '', ENT_QUOTES, 'UTF-8'));
$mensaje = trim(htmlspecialchars($_POST['mensaje'] ?? '', ENT_QUOTES, 'UTF-8'));

// Validar datos
if (empty($nombre) || strlen($nombre) > 50 ||
    empty($apellido) || strlen($apellido) > 50 ||
    empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 100 ||
    empty($mensaje) || strlen($mensaje) > 1000) {
    header('Location: contacto.html?error=1');
    exit;
}

// Configurar email
$to = 'mrfconstrucciones2007@gmail.com';
$subject = 'Nuevo contacto - MRF Constructora';
$body = "Nombre: $nombre\nApellido: $apellido\nEmail: $email\n\nMensaje:\n$mensaje\n\nFecha: " . date('d/m/Y H:i');
$headers = "From: no-reply@mrfconstrucciones.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Enviar
if (mail($to, $subject, $body, $headers)) {
    header('Location: contacto.html?success=1');
} else {
    header('Location: contacto.html?error=1');
}
exit;
?>

