if (e.target.checked) {
    // Switch to dark mode
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
} else {
    // Switch to light mode
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
}