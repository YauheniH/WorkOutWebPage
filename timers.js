// General timer logic function
function startTimer(timerId, displayId) {
    let timeLeft = 60; // 1 minute in seconds (60 seconds)
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
          timeLeft = 60;  // Reset the time to 1 minute
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
  startTimer("startButton1", "timerDisplay1");
  startTimer("startButton2", "timerDisplay2");
  startTimer("startButton3", "timerDisplay3");
  startTimer("startButton4", "timerDisplay4");
  startTimer("startButton5", "timerDisplay5");
  startTimer("startButton6", "timerDisplay6");
  startTimer("startButton7", "timerDisplay7");
  startTimer("startButton8", "timerDisplay8");
  startTimer("startButton9", "timerDisplay9");
  startTimer("startButton10", "timerDisplay10");
  startTimer("startButton11", "timerDisplay11");
  startTimer("startButton12", "timerDisplay12");
  startTimer("startButton13", "timerDisplay13");
  startTimer("startButton14", "timerDisplay14");
  startTimer("startButton15", "timerDisplay15");
  startTimer("startButton16", "timerDisplay16");
  startTimer("startButton17", "timerDisplay17");
  startTimer("startButton18", "timerDisplay18");
  startTimer("startButton19", "timerDisplay19");
  startTimer("startButton20", "timerDisplay20");
  startTimer("startButton21", "timerDisplay21");
  startTimer("startButton22", "timerDisplay22");
  startTimer("startButton23", "timerDisplay23");
  startTimer("startButton24", "timerDisplay24");