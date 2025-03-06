function getTicketCountFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('tickets')) || 0;
}

function createCircles(ticketCount) {
    const container = document.getElementById("circles-container");
    container.innerHTML = ""; 
    
    for (let i = 1; i <= 5; i++) {
        let circleWrapper = document.createElement("div");
        circleWrapper.style.textAlign = "center";
        
        let circle = document.createElement("div");
        circle.classList.add("circle");
        
        let number = document.createElement("div");
        number.classList.add("number");
        number.textContent = i;
        
        circleWrapper.appendChild(circle);
        circleWrapper.appendChild(number);
        container.appendChild(circleWrapper);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ticketCount = getTicketCountFromURL();
    createCircles(ticketCount);
});