// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded'); // Check if script is loading

    const themeToggleButton = document.getElementById('theme-toggle');

    // Load the saved theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleButton.textContent = '☀️'; // Change icon to Sun
    } else {
        document.body.classList.remove('dark-mode');
        themeToggleButton.textContent = '🌙'; // Change icon to Moon
    }

    themeToggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            themeToggleButton.textContent = '🌙'; // Change icon to Moon
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-mode');
            themeToggleButton.textContent = '☀️'; // Change icon to Sun
            localStorage.setItem('theme', 'dark');
        }
    });
});
