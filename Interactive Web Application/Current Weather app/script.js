async function fetchWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value.trim();

    if (cityName === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod !== 200) {
            alert(`City '${cityName}' not found.`);
            return;
        }

        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again later.');
    }
}
