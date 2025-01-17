// General timer logic function
function startTimer(timerId, displayId) {
    let timeLeft = 180; // 3 minute in seconds (60 seconds)
    let timerInterval;
    
    const timerDisplay = document.getElementById(displayId);
    const startButton = document.getElementById(timerId);
  
    // Function to update the timer display
    const updateDisplay = () => {
      const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
      const seconds = String(timeLeft % 60).padStart(2, '0');
      timerDisplay.textContent = `${minutes}:${seconds}`;
    };
  
    // Function to start the countdown
    const startCountdown = () => {
      // Disable the button while the timer is running
      startButton.disabled = true;
  
      // Update the timer every second
      timerInterval = setInterval(() => {
        timeLeft--;  // Decrease the time by 1 second
  
        if (timeLeft <= 0) {
          clearInterval(timerInterval);  // Stop the timer
          alert(`${displayId} Time's up!`);
          startButton.disabled = false;  // Re-enable the button
          timeLeft = 180;  // Reset the time to 3 minute
          updateDisplay();  // Reset the display
        } else {
          updateDisplay();  // Update the timer display
        }
      }, 1000);  // 1000 ms = 1 second
    };
  
    // Event listener for the button click
    startButton.addEventListener("click", startCountdown);
  }
  
  // Initialize the timers
  startTimer("startB1", "timerD1");
  startTimer("startB2", "timerD2");
  startTimer("startB3", "timerD3");
  startTimer("startB4", "timerD4");
