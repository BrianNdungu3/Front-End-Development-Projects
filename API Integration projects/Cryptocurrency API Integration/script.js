// Function to fetch cryptocurrency data from the API
async function fetchCryptoData(cryptoSymbol) {
    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoSymbol}&vs_currencies=usd`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
    }
}

// Function to display cryptocurrency information on the webpage
function displayCryptoPrice(cryptoData) {
    const cryptoContainer = document.getElementById('crypto-container');
    cryptoContainer.innerHTML = `
        <h2>Current Price of ${cryptoData.symbol.toUpperCase()}: $${cryptoData.usd}</h2>
    `;
}

// Event listener for the form submission
document.getElementById('crypto-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const cryptoSymbol = document.getElementById('crypto-symbol').value;
    const cryptoData = await fetchCryptoData(cryptoSymbol);
    displayCryptoPrice(cryptoData[cryptoSymbol]);
});
