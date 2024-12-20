<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $nombre = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['Telefono']);
    $direccion = htmlspecialchars($_POST['Direccion']);
    $mensaje = htmlspecialchars($_POST['message']);

    // Configuración del correo
    $destinatario = "javierrumo2@gmail.com";  // Reemplaza con tu correo Gmail
    $asunto = "Nuevo pedido de $nombre";
    $cuerpo = "
        <html>
        <head>
            <title>Nuevo pedido</title>
        </head>
        <body>
            <h2>Has recibido un nuevo pedido desde tu formulario de contacto</h2>
            <p><strong>Nombre:</strong> $nombre</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Teléfono:</strong> $telefono</p>
            <p><strong>Dirección:</strong> $direccion</p>
            <p><strong>Mensaje:</strong></p>
            <p>$mensaje</p>
        </body>
        </html>
    ";


    // Cabeceras adicionales
    $headers = "From: $nombre";
    $mail = mail($destinatario, $asunto, $cuerpo, $headers);

    // Enviar el correo
    if ($mail) {
        echo "El pedido se ha enviado correctamente.";
    } else {
        echo "Ha habido un error al enviar el pedido.";
    }
}

