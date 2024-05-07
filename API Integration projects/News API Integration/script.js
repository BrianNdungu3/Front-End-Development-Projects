document.addEventListener('DOMContentLoaded', async function() {
    const apiKey = 'YOUR_NEWS_API_KEY';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news data:', error);
    }
});

function displayNews(articles) {
    const newsList = document.getElementById('news-list');
    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;
        newsList.appendChild(newsItem);
    });
}
