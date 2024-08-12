// scripts/theme-toggle.js

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Apply the saved theme
  document.documentElement.setAttribute('data-theme', currentTheme);

  toggleButton.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});