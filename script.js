document.addEventListener("DOMContentLoaded", () => {
        const countdownElement = document.getElementById('countdown');
    
        if (countdownElement) {
            const countdownDate = new Date(); // Replace with actual date
            countdownDate.setDate(countdownDate.getDate() + 15); // Sample 15 days
    
            function updateCountdown() {
                const now = new Date().getTime();
                const timeLeft = countdownDate - now;
    
                if (timeLeft <= 0) {
                    countdownElement.innerHTML = "Tiempo finalizado";
                    return;
                }
    
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
                countdownElement.innerHTML = `${days} DíAS ${hours} HORAS ${minutes} MINUTOS ${seconds} SEGUNDOS`;
            }
    
            updateCountdown(); // Initial call
            setInterval(updateCountdown, 1000); // Update every second
        }
    });
    