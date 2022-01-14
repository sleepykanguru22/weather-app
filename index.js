//date & time

let currentTime = new Date();

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[date.getDay()];
  let currentHours = currentTime.getHours() + ":" + currentTime.getMinutes();

  let formattedDate = ` ${currentDay}, ${currentHours}`;

  return formattedDate;
}

let time = document.querySelector("#time");
time.innerHTML = formatDate(currentTime);

//search change city
function showWeather(response) {
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector(".degrees").innerHTML = `${Math.round(
    response.data.main.temp
  )}°<small>C</small>`;
}

function searchForm(event) {
  event.preventDefault();
  let apiKey = "4eb395383e9345ff366f409df8a62886";
  let searchInput = document.querySelector(".search");
  let city = document.querySelector("#city-name");
  city.innerHTML = `${searchInput.value}`;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(showWeather);
}
let form = document.querySelector("form");
form.addEventListener("submit", searchForm);
