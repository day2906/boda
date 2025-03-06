function getTicketCountFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('tickets')) || 0;
}

function displayNumber(ticketCount) {
    const container = document.getElementById("number-container");
    container.innerHTML = ""; 

    // Crear un solo número
    const number = document.createElement("div");
    number.classList.add("number");
    number.textContent = ticketCount;  // Mostrar el número de boletos

    // Si hay boletos, lo resalta
    if (ticketCount > 0) {
        number.classList.add("highlighted");
    }

    container.appendChild(number);
}

document.addEventListener("DOMContentLoaded", () => {
    const ticketCount = getTicketCountFromURL();
    displayNumber(ticketCount);
});
