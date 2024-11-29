// Countdown Timer Function
function startCountdown(durationInHours) {
    const targetDate = new Date().getTime() + durationInHours * 60 * 60 * 1000;
  
    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;
  
      if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "<p>The website is now live!</p>";
        return;
      }
  
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      document.getElementById("hours").textContent = String(hours).padStart(2, "0");
      document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
      document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }
  
    setInterval(updateCountdown, 1000);
    updateCountdown();
  }
  
  // Start Countdown (Adjust duration as needed)
  startCountdown(3); // 3 hours
  
  // Loading Overlay Functionality
  document.addEventListener("DOMContentLoaded", function () {
    // Simulate loading delay
    setTimeout(() => {
      const overlay = document.getElementById("loading-overlay");
      overlay.style.opacity = "0";
      overlay.style.visibility = "hidden";
      overlay.style.transition = "opacity 1.5s ease-in-out, visibility 1.5s ease-in-out";
    }, 3000); // 3-second delay
  });
  