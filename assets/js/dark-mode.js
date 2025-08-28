/* filepath: assets/js/dark-mode.js */
// Dark Mode Toggle Functionality
(function() {
    const THEME_KEY = 'theme-preference';
    
    // Get theme preference from localStorage or default to 'light'
    function getThemePreference() {
        return localStorage.getItem(THEME_KEY) || 'light';
    }
    
    // Set theme preference in localStorage
    function setThemePreference(theme) {
        localStorage.setItem(THEME_KEY, theme);
    }
    
    // Apply theme to document
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update toggle button icons
        const darkIcon = document.querySelector('.dark-mode-icon');
        const lightIcon = document.querySelector('.light-mode-icon');
        
        if (darkIcon && lightIcon) {
            if (theme === 'dark') {
                darkIcon.style.display = 'none';
                lightIcon.style.display = 'inline';
            } else {
                darkIcon.style.display = 'inline';
                lightIcon.style.display = 'none';
            }
        }
    }
    
    // Toggle between light and dark themes
    function toggleTheme() {
        const currentTheme = getThemePreference();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        setThemePreference(newTheme);
        applyTheme(newTheme);
        
        // Add smooth transition effect
        document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.documentElement.style.transition = '';
        }, 300);
    }
    
    // Initialize theme on page load
    function initializeTheme() {
        const savedTheme = getThemePreference();
        applyTheme(savedTheme);
        
        // Add event listener to toggle button
        const toggleButton = document.getElementById('darkModeToggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', toggleTheme);
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeTheme);
    } else {
        initializeTheme();
    }
    
    // Also initialize on page navigation (for SPA-like behavior)
    window.addEventListener('load', initializeTheme);
})();