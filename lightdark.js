const toggleButton = document.getElementById("toggle-dark-mode");
const bodyElement = document.getElementById("body");
const sectionElement = document.getElementById("main"); // Change this to the ID of your section
const wrapperElement = document.getElementById("wrapper"); // ID of the wrapper element
const slackButton = document.getElementById("slackButton");
const cardContentElements = document.querySelectorAll(".card-content");
const cardElements = document.querySelectorAll(".card");
const navbarElements = document.querySelectorAll(".navbar");

// Flatten NodeLists into arrays
const cardContentArray = Array.from(cardContentElements);
const cardArray = Array.from(cardElements);
const navbarArray = Array.from(navbarElements);

// Store all elements in a single list
const elements = [
  bodyElement,
  sectionElement,
  wrapperElement,
  slackButton,
  ...cardContentArray,
  ...cardArray,
  ...navbarArray,
];

// Function to switch to dark mode and store the preference
function switchToDark() {
  elements.forEach((element) => {
    if (element) {
      // Check if element exists
      element.classList.remove("light-mode");
      element.classList.add("dark-mode");
    }
  });
  toggleButton.textContent = "☀️";
  localStorage.setItem("mode", "dark");
}

// Function to switch to light mode and store the preference
function switchToLight() {
  elements.forEach((element) => {
    if (element) {
      // Check if element exists
      element.classList.remove("dark-mode");
      element.classList.add("light-mode");
    }
  });
  toggleButton.textContent = "🌙";
  localStorage.setItem("mode", "light");
}

// Initial mode setting based on time or user preference
switchToDark();

// Toggle mode on button click
toggleButton.addEventListener("click", () => {
  if (sectionElement.classList.contains("dark-mode")) {
    switchToLight();
  } else {
    switchToDark();
  }
});
