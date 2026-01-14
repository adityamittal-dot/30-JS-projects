const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");

const weatherInfo = document.getElementById("weatherInfo");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const error = document.getElementById("error");

const API_KEY = "b6db82feaa1ca07c8645586aea822615";

getWeatherBtn.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value.trim(); // ✅ FIXED

  if (city === "") {
    showError("Please enter a city name");
    return;
  }

  try {
    error.classList.add("hidden");

    // API call
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    // Show weather
    weatherInfo.classList.remove("hidden");

    cityName.textContent = data.name;
    temperature.textContent = `🌡 Temperature: ${data.main.temp} °C`;
    condition.textContent = `☁ Condition: ${data.weather[0].description}`;
    humidity.textContent = `💧 Humidity: ${data.main.humidity}%`;
    wind.textContent = `🌬 Wind Speed: ${data.wind.speed} m/s`;

  } catch (err) {
    showError(err.message);
  }
}

function showError(message) {
  weatherInfo.classList.add("hidden");
  error.textContent = message;
  error.classList.remove("hidden");
}
