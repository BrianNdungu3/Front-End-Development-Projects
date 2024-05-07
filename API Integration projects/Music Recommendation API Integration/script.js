const musicRecommendationContainer = document.getElementById('music-recommendation');
const getRecommendationBtn = document.getElementById('get-recommendation-btn');

async function fetchMusicRecommendation() {
    try {
        const response = await fetch('https://api.spoonacular.com/food/jokes/random?apiKey=YOUR_API_KEY');
        const data = await response.json();
        musicRecommendationContainer.innerHTML = `<p>${data.text}</p>`;
    } catch (error) {
        console.error('Error fetching music recommendation:', error);
        musicRecommendationContainer.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
    }
}

getRecommendationBtn.addEventListener('click', fetchMusicRecommendation);

// Initial fetch
fetchMusicRecommendation();
