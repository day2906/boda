function getTicketCountFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('tickets')) || 0;
}

function createCircles(ticketCount) {
    const container = document.getElementById("circles-container");
    container.innerHTML = ""; 

    // Genera círculos según la cantidad de boletos
    for (let i = 1; i <= ticketCount; i++) {
        let circleWrapper = document.createElement("div");
        circleWrapper.style.textAlign = "center";
        
        let circle = document.createElement("div");
        circle.classList.add("circle");
        
        let number = document.createElement("div");
        number.classList.add("number");
        number.textContent = i;
        
        // Agregar el evento para seleccionar el círculo
        circle.addEventListener("click", function() {
            circle.classList.toggle("selected");
        });

        circleWrapper.appendChild(circle);
        circleWrapper.appendChild(number);
        container.appendChild(circleWrapper);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const ticketCount = getTicketCountFromURL();
    createCircles(ticketCount);
});
