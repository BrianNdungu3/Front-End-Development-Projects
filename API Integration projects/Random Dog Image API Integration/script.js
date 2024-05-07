const dogImageContainer = document.getElementById('dog-image');
const getDogBtn = document.getElementById('get-dog-btn');

async function fetchDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        dogImageContainer.innerHTML = `<img src="${data.message}" alt="Random Dog">`;
    } catch (error) {
        console.error('Error fetching dog image:', error);
        dogImageContainer.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
    }
}

getDogBtn.addEventListener('click', fetchDogImage);

// Initial fetch
fetchDogImage();
