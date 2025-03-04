function enviarMensaje() {
    let numero = "5215580078471"; // Reemplaza con tu número
    let mensaje = encodeURIComponent("Hola, mi nombre es [NOMBRE], quiero confirmar mi asistencia a la boda de Daniel y Naomi.");
    let url = `https://wa.me/${numero}?text=${mensaje}`;
    window.open(url, "_blank");
}
