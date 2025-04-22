let timer; // Declare a global variable to store the timer interval

function startCountdown() {
    clearInterval(timer); // Clear any existing timer before starting a new one
    const targetTime = new Date(document.getElementById("datetime").value).getTime();
    if (isNaN(targetTime)) {
        alert("Please select a valid date and time.");
        return;
    }

    timer = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = targetTime - now;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "Time's up!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
