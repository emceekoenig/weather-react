import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let units = "imperial";
    let apiKey = "842b36d55cb28eba74a018029d56b04c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
    console.log(apiUrl);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        className="query"
        onChange={updateCity}
      />
      <button type="submit" className="submit">
        Search
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div className="container">
        <div className="row">{form}</div>

        <div className="row mt-4">
          <div className="col">
            <h1 className="title-case">{city}</h1>
            <ul>
              <li>Temperature: {Math.round(weather.temperature)}°F</li>
              <li className="title-case">Description: {weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {Math.round(weather.wind / 1.609)} mph</li>
            </ul>
          </div>

          <div className="col my-auto icon">
            <img src={weather.icon} alt="Weather Icon" />
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
