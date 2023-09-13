let now = new Date();
let h2 = document.querySelector("h2");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${minutes}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
h2.innerHTML = `${day}, ${hours}:${minutes}`;
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = "Johannesburg";
  let search = document.querySelector("#search");
  cityElement.innerHTML = search.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
let apiKey = `701f06352d61835bc4fc894e7b084629`;
let city = "Durban";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}&units=metric`;



function showTemperature(response){
  let temp=Math.round(response.data.main.temp);
  let tempElement=document.querySelector("#temp");
  let description=document.querySelector("#temperature-description");
tempElement.innerHTML=`${temp}℃`;
description.innerHTML=response.data.weather[0].decsription;

}

