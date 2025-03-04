function enviarMensaje() {
    let numero = "5215580078471"; // Reemplaza con tu número
    let mensaje = encodeURIComponent("Hola, quiero más información");
    let url = `https://wa.me/${numero}?text=${mensaje}`;
    window.open(url, "_blank");
}