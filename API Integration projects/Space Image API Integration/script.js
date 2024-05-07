const imageContainer = document.getElementById('image-container');
const getImageBtn = document.getElementById('get-image-btn');

async function fetchSpaceImage() {
    try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        const data = await response.json();
        if (data.media_type === 'image') {
            imageContainer.innerHTML = `<img src="${data.url}" alt="${data.title}" />`;
        } else {
            imageContainer.innerHTML = `<p>No image available today. Check back tomorrow!</p>`;
        }
    } catch (error) {
        console.error('Error fetching space image:', error);
        imageContainer.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
    }
}

getImageBtn.addEventListener('click', fetchSpaceImage);

// Initial fetch
fetchSpaceImage();
