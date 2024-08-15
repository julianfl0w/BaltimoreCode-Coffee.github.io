const toggleButton = document.getElementById('toggle-dark-mode');
const sectionElement = document.getElementById('main'); // Change this to the ID of your section

toggleButton.addEventListener('click', () => {
    if (sectionElement.classList.contains('dark-mode')) {
        sectionElement.classList.remove('dark-mode');
        sectionElement.classList.add('light-mode');
        toggleButton.textContent = 'Dark Mode';
    } else {
        sectionElement.classList.remove('light-mode');
        sectionElement.classList.add('dark-mode');
        toggleButton.textContent = 'Light Mode';
    }
});
