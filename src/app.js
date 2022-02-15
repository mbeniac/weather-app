function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let conditionElement = document.querySelector("#description");
  conditionElement.innerHTML = response.data.weather[0].description;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
}

let apiKey = "c3be0ab72af9c5b189f134b093f111bc";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
