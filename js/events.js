document.addEventListener("DOMContentLoaded", function () {
  function startCountdown(targetDate, elementId) {
    const countDownDate = new Date(targetDate).getTime();
    const countdownEl = document.getElementById(elementId);

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        countdownEl.innerHTML = "Event Started!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown(); // Run immediately
    setInterval(updateCountdown, 1000);
  }

  startCountdown("August 10, 2025 09:00:00", "countdown1");
});
