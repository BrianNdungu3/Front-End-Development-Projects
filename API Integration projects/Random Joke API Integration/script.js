const jokeContainer = document.getElementById('joke');
const getJokeBtn = document.getElementById('get-joke-btn');

async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.punchline}</p>`;
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeContainer.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
    }
}

getJokeBtn.addEventListener('click', fetchJoke);

// Initial fetch
fetchJoke();
