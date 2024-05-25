function toggleTheme() {
    document.documentElement.classList.toggle('lightmode');
    document.documentElement.classList.toggle('darkmode');

    // Check if dark mode is enabled and store the preference
    if (document.documentElement.classList.contains('darkmode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Add click event listeners to the theme changer buttons
document.getElementById('lightmode').addEventListener('click', toggleTheme);
document.getElementById('darkmode').addEventListener('click', toggleTheme);

// Check for theme preference in local storage and apply it
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.classList.add('darkmode');
} else if (savedTheme === 'light') {
    document.documentElement.classList.add('lightmode');
} else {
    document.documentElement.classList.add('darkmode'); // Set default theme to 'darkmode'
}