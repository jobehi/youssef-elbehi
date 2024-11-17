(function () {
    const body = document.body;
    const darkModeIcon = document.getElementById("darkModeIcon");

    // Function to set theme
    function setTheme(theme) {
        body.setAttribute("data-theme", theme);
        darkModeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
        localStorage.setItem("theme", theme); // Save preference
    }

    // Function to toggle theme
    window.toggleTheme = function () {
        const currentTheme = body.getAttribute("data-theme");
        setTheme(currentTheme === "dark" ? "light" : "dark");
    };

    // Check saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // If no preference is saved, use system preference
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(systemPrefersDark ? "dark" : "light");
    }

    // Listen for changes in system preferences
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
        setTheme(event.matches ? "dark" : "light");
    });
})();