// JavaScript code to fetch weather data from OpenWeatherMap API

// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = '0bffae351f092686f72c75c1322fba45';
// Example city, replace 'London' with your desired city
const city = 'London';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// Using fetch to get weather data
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));