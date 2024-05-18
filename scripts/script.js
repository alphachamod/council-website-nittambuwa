// Slider Action Arrows

const slider = document.querySelector('.slider');

function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);

// Search Null Validation

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchInput.addEventListener('keyup', () => {
    const value = searchInput.value.trim(); // Trim whitespace
    if (!value) {
        searchInput.classList.add('is-invalid'); // Add Bootstrap error class
        searchButton.disabled = true; // Disable button
    } else {
        searchInput.classList.remove('is-invalid');
        searchButton.disabled = false;
    }
});

