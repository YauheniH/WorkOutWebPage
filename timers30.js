function startTimer(timerId, displayId) {
    let timeLeft = 30; // Set initial time to 30 seconds
    let timerInterval;
    
    const timerDisplay = document.getElementById(displayId);
    const startButton = document.getElementById(timerId);
  
    // Function to update the timer display
    const updateDisplay = () => {
        const seconds = String(timeLeft % 60).padStart(2, '0'); // Only seconds since it's less than a minute
        timerDisplay.textContent = `00:${seconds}`; // Display as MM:SS format
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
                timeLeft = 30;  // Reset the time to 30 seconds
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
startTimer("startBB1", "timerDD1");
startTimer("startBB2", "timerDD2");
startTimer("startBB3", "timerDD3");
startTimer("startBB4", "timerDD4");
startTimer("startBB5", "timerDD5");
startTimer("startBB6", "timerDD6");
startTimer("startBB7", "timerDD7");
startTimer("startBB8", "timerDD8");
startTimer("startBB9", "timerDD9");
startTimer("startBB10", "timerDD10");
startTimer("startBB11", "timerDD11");
startTimer("startBB12", "timerDD12");
startTimer("startBB13", "timerDD13");
startTimer("startBB14", "timerDD14");
startTimer("startBB15", "timerDD15");
startTimer("startBB16", "timerDD16");
startTimer("startBB17", "timerDD17");
startTimer("startBB18", "timerDD18");
