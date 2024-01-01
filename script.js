document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "YOUR_API_KEY";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY&appid=" + apiKey;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weather-info");
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            const weatherInfo = document.getElementById("weather-info");
            weatherInfo.innerHTML = "<p>Failed to fetch weather data</p>";
        });
});
