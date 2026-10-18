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

    const body = document.querySelector('body');
    const logoContainer = document.querySelector('#logo-container');
    const sidebar = document.querySelector('#side');
    const line = document.querySelector('#line');
    const settings = document.querySelector('#settings');
    const help = document.querySelector('#help');
    const shrink = document.querySelector('#shrink');
    const settingsExpanded = document.querySelector("#settings-container"); 
    const home = document.querySelector("#home");
    const gadget = document.querySelector("#gadget");
    const notification = document.querySelector("#notification");
    const analytics = document.querySelector("#analytics");
    const history = document.querySelector("#history");


    logoContainer.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
        line.classList.toggle('expanded');
        settings.classList.toggle('expanded');
        help.classList.toggle('visibility');
        shrink.classList.toggle('visibility');

        if(sidebar.classList.contains('expanded')){
            home.classList.add('home-visibility');
            gadget.classList.add('gadget-visibility');
            notification.classList.add('notification-visibility');
            analytics.classList.add('analytics-visibility');
            history.classList.add('history-visibility');
        }else{
            home.classList.remove('home-visibility');
            gadget.classList.remove('gadget-visibility');
            notification.classList.remove('notification-visibility');
            analytics.classList.remove('analytics-visibility');
            history.classList.remove('history-visibility');
        }

    });

    
    settings.addEventListener('click', (e) => {
        e.stopPropagation();

        if(sidebar.classList.contains('expanded')){
            settingsExpanded.classList.toggle('popOut');
            settingsExpanded.classList.remove('popIn');
        }else{
            settingsExpanded.classList.toggle('popIn');
            settingsExpanded.classList.remove('popOut');
        }

    });


    document.addEventListener('click', (e) => {
        if(!settings.contains(e.target) && !settingsExpanded.contains(e.target)){
            settingsExpanded.classList.remove('popOut');
            settingsExpanded.classList.remove('popIn');
        }
    });






