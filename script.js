let apiKey = "3deb6300a45847de8e5a7328dd9f3134";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherDetailCard = document.querySelector(".card");
const zeroStateCard = document.querySelector(".zeroState-card");
const backgroundChange = document.querySelector("body");
searchBtn.addEventListener("click", () => {
    getWeatherDetails(searchBox.value);
});
searchBox.addEventListener("Enter", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        getWeatherDetails(searchBox.value);
    }
});

const getWeatherDetails = async (city) => {
    let weatherDetails = await fetch(apiUrl + city + `&appid=${apiKey}`).then(
        (data) => data.json()
    );
    document.querySelector(".city-name").innerHTML = weatherDetails.name;
    document.querySelector(".temp").innerHTML =
        Math.round(weatherDetails.main.temp) + "°C";
    document.querySelector(".wind-speed").innerHTML =
        Math.round(weatherDetails.wind.speed) + " km/h";
    document.querySelector(".hum-value").innerHTML =
        weatherDetails.main.humidity + "%";

    if (weatherDetails.weather[0].main == "Clouds") {
        weatherIcon.src = "Assets/images/clouds.png";
    } else if (weatherDetails.weather[0].main == "Clear") {
        weatherIcon.src = "Assets/images/clear.png";
    } else if (weatherDetails.weather[0].main == "Drizzle") {
        weatherIcon.src = "Assets/images/drizzle.png";
    } else if (weatherDetails.weather[0].main == "Humidity") {
        weatherIcon.src = "Assets/images/humidity.png";
    } else if (weatherDetails.weather[0].main == "Mist") {
        weatherIcon.src = "Assets/images/mist.png";
    } else if (weatherDetails.weather[0].main == "Rain") {
        weatherIcon.src = "Assets/images/rain.png";
    } else if (weatherDetails.weather[0].main == "Snow") {
        weatherIcon.src = "Assets/images/snow.png";
    } else if (weatherDetails.weather[0].main == "Wind") {
        weatherIcon.src = "Assets/images/wind.png";
    }

    weatherDetailCard.style.display = "flex";
    zeroStateCard.style.display = "none";
};
