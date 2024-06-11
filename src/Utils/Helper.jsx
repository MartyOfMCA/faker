import { appName } from "./";

function loadSavedTheme() {
  return localStorage.getItem(appName);
}

function toggleTheme(shouldToggle = true) {
  // Check for saved theme states.
  let savedTheme = loadSavedTheme();

  if (!savedTheme) {
    // Check the system theme applied then alternate it if there's no saved theme.
    savedTheme = matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  // Set the new theme when the user toggles the theme.
  // Calls originated from page loads should not toggle the theme.
  setAlternateTheme(savedTheme, shouldToggle);
  toggleThemeIcon();

  if (matchMedia("(max-width: 640px)").matches) {
    setMobileThemeColor();
  }
}

function setAlternateTheme(savedTheme, shouldToggle) {
  let alternateTheme = savedTheme === "dark" ? "light" : "dark";

  // If the user is not toggling the theme, set maintain the saved theme.
  if (!shouldToggle) {
    alternateTheme = savedTheme;
  }
  document.body.classList.add(alternateTheme);

  // Change the theme if the call originated from the toggle theme button.
  if (shouldToggle) {
    document.body.classList.remove(savedTheme);
  }

  localStorage.setItem(appName, alternateTheme);
}

function setMobileThemeColor() {
  const savedTheme = loadSavedTheme();
  const themeColor = savedTheme === 'dark' ? "#212529" : "#EDEDE9";
  document.getElementById("theme-color").setAttribute("content", themeColor);
}

function toggleThemeIcon() {
  if (loadSavedTheme() === "dark") {
    updateThemeIconState(".theme-toggle-icon--light", ".theme-toggle-icon--dark");
  } else {
    updateThemeIconState(".theme-toggle-icon--dark", ".theme-toggle-icon--light");
  }
}

function updateThemeIconState(iconIdentifierToShow, iconIdentifierToHide) {
  document.querySelector(iconIdentifierToHide).classList.add("hide");
  document.querySelector(iconIdentifierToShow).classList.remove("hide");
}

export { toggleTheme };
