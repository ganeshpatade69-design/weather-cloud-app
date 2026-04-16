async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey ="c6bbdf55005c01069db227d9c01c6f8e"; // Replace with your API key

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById("weatherResult").innerHTML = `
                <h2>${data.name}</h2>
                <p>🌡 Temperature: ${data.main.temp} °C</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬 Wind: ${data.wind.speed} m/s</p>
                <p>☁ Condition: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById("weatherResult").innerHTML = "City not found!";
        }
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "Error fetching data!";
    }
}
