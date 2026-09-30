const startDate = new Date("2026-09-12T00:00:00");

function updateCounter() {
    const now = new Date();
    let difference = now - startDate;

    if (difference < 0) {
        difference = 0;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);

const secretButton = document.getElementById("secretButton");
const secretMessage = document.getElementById("secretMessage");

secretButton.addEventListener("click", function () {
    secretMessage.classList.toggle("show");

    if (secretMessage.classList.contains("show")) {
        secretButton.textContent = "♡ Para usted";
    } else {
        secretButton.textContent = "Abrir ❤️";
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 18) + "px";
    heart.style.animationDuration = (7 + Math.random() * 7) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 15000);
}

setInterval(createHeart, 1200);
