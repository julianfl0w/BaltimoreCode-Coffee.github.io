const toggleButton = document.getElementById('toggle-dark-mode');
const sectionElement = document.getElementById('main'); // Change this to the ID of your section
const wrapperElement = document.getElementById('wrapper'); // ID of the wrapper element
const cardContentElement = document.getElementById('card-content'); // ID of the card content element
const cardElement = document.getElementById('card'); // ID of the card content element

// Store elements in a list
const elements = [sectionElement, wrapperElement, cardContentElement, cardElement];

// Function to switch to dark mode and store the preference
function switchToDark() {
    elements.forEach(element => {
        if (element) { // Check if element exists
            element.classList.remove('light-mode');
            element.classList.add('dark-mode');
        }
    });
    toggleButton.textContent = "☀️";
    localStorage.setItem('mode', 'dark');
}

// Function to switch to light mode and store the preference
function switchToLight() {
    elements.forEach(element => {
        if (element) { // Check if element exists
            element.classList.remove('dark-mode');
            element.classList.add('light-mode');
        }
    });
    toggleButton.textContent = '🌙';
    localStorage.setItem('mode', 'light');
}

// Function to set mode based on the time and user's preference
function setModeBasedOnTime() {
    const mode = localStorage.getItem('mode');

    if (mode) {
        if (mode === 'dark') {
            switchToDark();
        } else {
            switchToLight();
        }
    } else {
        // Default mode based on time
        const currentHour = new Date().getHours();
        if (currentHour >= 7 && currentHour < 19) {
            switchToLight();
        } else {
            switchToDark();
        }
    }
}

// Initial mode setting based on time or user preference
setModeBasedOnTime();

// Toggle mode on button click
toggleButton.addEventListener('click', () => {
    if (sectionElement.classList.contains('dark-mode')) {
        switchToLight();
    } else {
        switchToDark();
    }
});
