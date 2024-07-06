import { API_KEY } from './config.js';

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

// Event listener for form submission
weatherForm.addEventListener("submit", async event => {
    event.preventDefault();

    const city = cityInput.value;

    if (!city) {
        displayError("Please enter a city");
    } else {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error.message);
        }
    }
});

/**
 * Fetches weather data for a given city
 * @param {string} city - The name of the city
 * @returns {Promise<Object>} - The weather data for the city
 * @throws {Error} - If the fetch operation fails
 */
async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

/**
 * Displays weather information on the card
 * @param {Object} data - The weather data
 */
function displayWeatherInfo(data) {
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

/**
 * Returns an emoji representing the weather condition
 * @param {number} weatherId - The weather condition ID from the API
 * @returns {string} - The corresponding weather emoji
 */
function getWeatherEmoji(weatherId) {
    if (weatherId >= 200 && weatherId < 300) {
        return '⛈️'; // Thunderstorm
    } else if (weatherId >= 300 && weatherId < 500) {
        return '🌧️'; // Drizzle
    } else if (weatherId >= 500 && weatherId < 600) {
        return '🌦️'; // Rain
    } else if (weatherId >= 600 && weatherId < 700) {
        return '❄️'; // Snow
    } else if (weatherId >= 700 && weatherId < 800) {
        return '🌫️'; // Atmosphere (fog, mist, etc.)
    } else if (weatherId === 800) {
        return '☀️'; // Clear
    } else if (weatherId > 800) {
        return '☁️'; // Clouds
    } else {
        return '🌡️'; // Default weather emoji
    }
}

/**
 * Displays an error message on the card
 * @param {string} message - The error message to display
 */
function displayError(message) {
    console.log("displayError called with message:", message); // Logging for debugging

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}

// Log to verify script is running
console.log("Script loaded");
