const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const randomFact = document.getElementById('random-fact');

// Event listener for search form submission
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        searchCelestialBody(searchTerm);
    } else {
        alert('Please enter a search term');
    }
});

// Function to search for celestial body
function searchCelestialBody(searchTerm) {
    // Implement searching for celestial body (e.g., using an API)
    // Display search results
    searchResults.innerHTML = `<p>Search results for "${searchTerm}":</p>`;
    // Example: Displaying fake search results for demonstration purposes
    const fakeResults = ['Sun', 'Moon', 'Mars', 'Jupiter', 'Saturn'];
    fakeResults.forEach(result => {
        const p = document.createElement('p');
        p.textContent = result;
        searchResults.appendChild(p);
    });
}

// Function to generate random astronomy fact
function generateRandomFact() {
    // Implement generating random fact (e.g., using an API)
    // Example: Displaying a fake random fact for demonstration purposes
    const fakeFacts = [
        'The Sun is a star at the center of the Solar System.',
        'The Moon is Earth\'s only natural satellite.',
        'Mars is known as the "Red Planet" due to its reddish appearance.',
        'Jupiter is the largest planet in the Solar System.',
        'Saturn is known for its prominent ring system made of ice and dust.'
    ];
    const randomIndex = Math.floor(Math.random() * fakeFacts.length);
    randomFact.textContent = fakeFacts[randomIndex];
}

// Generate random astronomy fact on page load
generateRandomFact();
