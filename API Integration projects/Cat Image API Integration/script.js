const catImageContainer = document.getElementById('cat-image');
const getCatBtn = document.getElementById('get-cat-btn');

async function fetchCatImage() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        const catImageUrl = data[0].url;
        catImageContainer.innerHTML = `<img src="${catImageUrl}" alt="Random Cat">`;
    } catch (error) {
        console.error('Error fetching cat image:', error);
        catImageContainer.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
    }
}

getCatBtn.addEventListener('click', fetchCatImage);

// Initial fetch
fetchCatImage();
