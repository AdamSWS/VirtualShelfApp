document.addEventListener('DOMContentLoaded', function() {
    var body = document.body;
    applyTheme(); // Apply the theme based on the stored preference

    var darkButton = document.getElementById('dark-button');
    var lightButton = document.getElementById('light-button');

    // Event listeners for theme toggle buttons
    if (darkButton) {
        darkButton.addEventListener('click', function() {
            setTheme('dark');
        });
    }

    if (lightButton) {
        lightButton.addEventListener('click', function() {
            setTheme('light');
        });
    }
});

function applyTheme() {
    var themePreference = localStorage.getItem('themePreference') || 'dark'; // Default to dark theme
    setTheme(themePreference);
}

function setTheme(theme) {
    var body = document.body;
    var navbars = document.querySelectorAll('.navbar');

    if (theme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        navbars.forEach(navbar => {
            navbar.classList.remove('navbar-light', 'bg-light');
            navbar.classList.add('navbar-dark', 'bg-dark');
        });
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        navbars.forEach(navbar => {
            navbar.classList.remove('navbar-dark', 'bg-dark');
            navbar.classList.add('navbar-light', 'bg-light');
        });
    }

    localStorage.setItem('themePreference', theme);
}

function toggleNavbarClass(mode) {
    var navbars = document.querySelectorAll('.navbar');
    if (mode === 'dark') {
        navbars.forEach(navbar => {
            navbar.classList.remove('navbar-light', 'bg-light');
            navbar.classList.add('navbar-dark', 'bg-dark');
        });
    } else {
        navbars.forEach(navbar => {
            navbar.classList.remove('navbar-dark', 'bg-dark');
            navbar.classList.add('navbar-light', 'bg-light');
        });
    }
}

