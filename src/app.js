function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.main.temp;
}

let apiKey = "c3be0ab72af9c5b189f134b093f111bc";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=${apiKey}&units=metrics`;

axios.get(apiUrl).then(displayTemperature);
