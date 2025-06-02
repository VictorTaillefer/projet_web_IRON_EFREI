// Wait until the entire DOM is loaded before starting any countdown logic
document.addEventListener("DOMContentLoaded", function () {

  /**
   * Starts a live countdown timer for a given event date and target element.
   * @param {string} targetDate - The date and time of the event (in string format).
   * @param {string} elementId - The ID of the HTML element where countdown will display.
   */
  function startCountdown(targetDate, elementId) {
    const countDownDate = new Date(targetDate).getTime(); // Convert event date to milliseconds
    const countdownEl = document.getElementById(elementId); // Get the display element by ID

    // Function to calculate remaining time and update the DOM
    function updateCountdown() {
      const now = new Date().getTime(); // Get current time in milliseconds
      const distance = countDownDate - now; // Calculate time difference

      // If event date has passed
      if (distance < 0) {
        countdownEl.innerHTML = "Event Started!";
        return;
      }

      // Calculate days, hours, minutes, and seconds remaining
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown element with the formatted string
      countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown(); // Initial run (prevents 1s delay)
    setInterval(updateCountdown, 1000); // Update every second
  }

  // Initialize the countdown for your specific event
  startCountdown("August 10, 2025 09:00:00", "countdown1");
});
