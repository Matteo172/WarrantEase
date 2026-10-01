function updateClock() {
    const now = new Date(); // Gets the current local date and time

    // Format the Date (e.g., "Thursday, October 1, 2026")
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    // Format the Time (e.g., "9:33:02 PM")
    const formattedTime = now.toLocaleTimeString('en-US');

    // Inject the formatted strings into the HTML elements
    document.getElementById('date-display').textContent = formattedDate;
    document.getElementById('time-display').textContent = formattedTime;
}

// Run the clock function immediately on load
updateClock();

// Update the clock every 1 second (1000ms)
setInterval(updateClock, 1000);
