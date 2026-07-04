const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const key = "H9EZUSFRZVGDKWCKR9TMKAYNK";

async function getWeather(location) {
    try {
        const response = await fetch(baseUrl + location + "?key=" + key);
        const weather = await response.json();
        const processed = processWeatherData(weather);
        displayWeather(processed);
    } catch (error) {
        displayError();
    }
}

function processWeatherData(weatherJson) {
    const currentConditions = weatherJson.currentConditions;
    const resolvedAddress = weatherJson.resolvedAddress;
    const description = weatherJson.description;

    return {
        temp: currentConditions.temp,
        conditions: currentConditions.conditions,
        location: resolvedAddress,
        description: description,
    }
}

const form = document.getElementById("weather-form");
const input = document.getElementById("location-input");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = input.value.trim();
    if (location) {
        getWeather(location);
    }
});

function displayWeather(data) {
    document.getElementById("error-message").classList.add("hidden");

    document.getElementById("location-name").textContent = data.location;
    document.getElementById("conditions").textContent = data.conditions;
    document.getElementById("temp").textContent = data.temp;
    document.getElementById("description").textContent = data.description;


    document.getElementById("weather-result").classList.remove("hidden");
}

function displayError() {
    document.getElementById("weather-result").classList.add("hidden");
    const error = document.getElementById("error-message");
    error.textContent = "Sorry, couldn't find results for that location.";
    error.classList.remove("hidden");
}