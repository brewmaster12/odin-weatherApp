const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const key = "H9EZUSFRZVGDKWCKR9TMKAYNK";
let weatherLocation = "dublin";

async function getWeather() {
    try {
        const response = await fetch(baseUrl + weatherLocation + "?key=" + key);
        const weather = await response.json();
        console.log(weather);
    } catch (error) {
        console.error(error);
    }
}

getWeather();


