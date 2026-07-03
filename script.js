const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const key = "H9EZUSFRZVGDKWCKR9TMKAYNK";
let weatherLocation = "dublin";

async function getWeather() {
    try {
        const response = await fetch(baseUrl + weatherLocation + "?key=" + key);
        const weather = await response.json();
        const processed = processWeatherData(weather);
        console.log(weather);
        console.log(processed)
    } catch (error) {
        console.error(error);
    }
}

getWeather();

function processWeatherData(weatherJson) {
    const currentConditions = weatherJson.currentConditions;
    const resolvedAddress = weatherJson.resolvedAddress;

    return {
        temp: currentConditions.temp,
        conditions: currentConditions.conditions,
        location: resolvedAddress
    }
}