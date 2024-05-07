window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.getElementById('description');
    let temperatureDegree = document.getElementById('temperature');
    let locationCity = document.getElementById('city');
    let locationCountry = document.getElementById('country');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=YOUR_API_KEY&units=metric`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const { temp } = data.main;
                    const { description } = data.weather[0];
                    const city = data.name;
                    const country = data.sys.country;

                    temperatureDegree.textContent = temp + "°C";
                    temperatureDescription.textContent = description;
                    locationCity.textContent = city;
                    locationCountry.textContent = country;
                });
        });
    }
});
