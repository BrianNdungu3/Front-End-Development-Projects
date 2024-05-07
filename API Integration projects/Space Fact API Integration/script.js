const spaceFactContainer = document.getElementById('space-fact');
const getFactBtn = document.getElementById('get-fact-btn');

async function fetchSpaceFact() {
    try {
        const response = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=space');
        const data = await response.json();
        spaceFactContainer.innerHTML = `<p>${data.text}</p>`;
    } catch (error) {
        console.error('Error fetching space fact:', error);
        spaceFactContainer.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
    }
}

getFactBtn.addEventListener('click', fetchSpaceFact);

// Initial fetch
fetchSpaceFact();
