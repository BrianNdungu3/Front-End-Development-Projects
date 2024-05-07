const quoteContainer = document.getElementById('quote');
const getQuoteBtn = document.getElementById('get-quote-btn');

async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        quoteContainer.innerHTML = `
            <p>${data.content}</p>
            <p>- ${data.author}</p>
        `;
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteContainer.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
    }
}

getQuoteBtn.addEventListener('click', fetchQuote);

// Initial fetch
fetchQuote();
