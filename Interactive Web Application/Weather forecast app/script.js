document.addEventListener('DOMContentLoaded', () => {
    getLocation();
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather, showError);
    } else {
        showError({ message: "Geolocation is not supported by this browser." });
    }
}

function showWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetchWeather(latitude, longitude);
    fetchForecast(latitude, longitude);
}

function showError(error) {
    const weatherInfo = document.querySelector('.weather-info');
    weatherInfo.innerHTML = `<div class="error">${error.message}</div>`;
}

async function fetchWeather(latitude, longitude) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const location = data.name + ', ' + data.sys.country;
        const temperature = data.main.temp + '°C';
        const description = data.weather[0].description;

        const locationDiv = document.querySelector('.location');
        const temperatureDiv = document.querySelector('.temperature');
        const descriptionDiv = document.querySelector('.description');

        locationDiv.textContent = location;
        temperatureDiv.textContent = temperature;
        descriptionDiv.textContent = description;
    } catch (error) {
        showError({ message: 'Failed to fetch weather data.' });
    }
}

async function fetchForecast(latitude, longitude) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const forecastDetails = document.querySelector('.forecast-details');
        forecastDetails.innerHTML = '';

        for (let i = 0; i < 3; i++) {
            const forecast = data.list[i];
            const date = new Date(forecast.dt * 1000);
            const dateString = date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
            const temperature = forecast.main.temp + '°C';
            const description = forecast.weather[0].description;

            const forecastDiv = document.createElement('div');
            forecastDiv.classList.add('forecast-item');
            forecastDiv.innerHTML = `
                <strong>${dateString}</strong><br>
                Temperature: ${temperature}<br>
                Description: ${description}
            `;
            forecastDetails.appendChild(forecastDiv);
        }
    } catch (error) {
        showError({ message: 'Failed to fetch forecast data.' });
    }
}
