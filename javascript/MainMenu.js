function updateClock() {
    const now = new Date(); // Gets the current local date and time

    // Format the Date
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    // Format the Time
    const formattedTime = now.toLocaleTimeString('en-US');

    // Inject the formatted strings into the HTML elements
    document.getElementById('date-display').textContent = formattedDate;
    document.getElementById('time-display').textContent = formattedTime;
}

// Run the clock function immediately on load
updateClock();

// Update the clock every 1 second (1000ms)
setInterval(updateClock, 1000);

const logoContainer = document.getElementById('logo-container');
    const sidebar = document.getElementById('side');
    const line = document.getElementById('line');
    const settings = document.getElementById('settings');
    const help = document.getElementById('help')
    const shrink = document.getElementById('shrink')

    logoContainer.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
        line.classList.toggle('expanded');
        settings.classList.toggle('expanded');
        help.classList.toggle('visibility')
        shrink.classList.toggle('visibility')
        
    });
