document.getElementById('weather-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const location = document.getElementById('location-input').value;

    const apiKey = 'YOUR_WEATHER_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});

function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>Weather in ${weatherData.name}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Description: ${weatherData.weather[0].description}</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
    `;
}
