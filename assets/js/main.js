document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  function updateIcons(theme) {
    if (theme === "dark") {
      darkIcon.classList.remove("hidden");
      lightIcon.classList.add("hidden");
    } else {
      lightIcon.classList.remove("hidden");
      darkIcon.classList.add("hidden");
    }
    if (window.lucide) lucide.createIcons();
  }

  // Set theme on page load
  const storedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = storedTheme || (systemPrefersDark ? "dark" : "light");
  document.documentElement.classList.toggle("dark", currentTheme === "dark");
  updateIcons(currentTheme);

  // Handle toggle click
  toggleBtn?.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    const newTheme = isDark ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    updateIcons(newTheme);
  });
});
