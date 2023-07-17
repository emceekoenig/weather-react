import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import arrow from "./imgs/arrow.svg";

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
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="grid-search">
            <div className="box">
              <input
                type="search"
                placeholder="Enter a city..."
                className="query form-control shadow-lg border-0 box"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="box">
              <button
                type="submit"
                className="submit form-control btn btn-light shadow-sm border-0 box"
              >
                Search
              </button>
            </div>

            <div className="box my-auto current-location">
              <img
                src={arrow}
                alt="Current Location"
                title="Current Location"
                className="arrow"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  let forecast = (
    <div className="container text-end">
      <div className="row mt-4 justify-content-center weather-header">
        <div className="col-5 temp-descript">
          <div className="row">
            <h1 className="d-flex justify-content-end temp">☀️ 84°F</h1>
          </div>

          <div className="row">
            <p className="d-flex justify-content-end description">
              <ul>
                <li>Humidity: 89%</li>
                <li>Wind: 12 mph</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="col-2 box divider">
          <div className="vr"></div>
        </div>

        <div className="col-5 city-descript">
          <div className="row">
            <h1 className="d-flex justify-content-end">Austin</h1>
          </div>

          <div className="row">
            <p className="d-flex justify-content-center">
              <ul>
                <li className="d-none d-sm-block text-nowrap">
                  as of Mon 8:15 AM
                </li>
                <li>Clear</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div className="container mobile-display d-block d-sm-none text-center">
        <p className="mt-4 mb-0">Austin</p>
        <h1 className="mb-0">
          84<span className="degrees">°</span>
        </h1>
        <p>Clear</p>
      </div>

      <div className="row mb-0">
        <div className="grid-forecast forecast-day">
          <div className="col box">Mon</div>
          <div className="col box">Tues</div>
          <div className="col box">Wed</div>
          <div className="col box">Thurs</div>
          <div className="col box">Fri</div>
        </div>
      </div>

      <div className="row">
        <div className="grid-forecast forecast-icon">
          <div className="col box">☀️</div>
          <div className="col box">☀️</div>
          <div className="col box">☀️</div>
          <div className="col box">⛈️</div>
          <div className="col box">🌦️</div>
        </div>
      </div>

      <div className="row">
        <div className="grid-forecast forecast-temp mb-3 hi-lo">
          <div className="col box">
            <span className="fw-bold">105°</span>/80°
          </div>
          <div className="col box">
            <span className="fw-bold">105°</span>/80°
          </div>
          <div className="col box">
            <span className="fw-bold">105°</span>/80°
          </div>
          <div className="col box">
            <span className="fw-bold">105°</span>/80°
          </div>
          <div className="col box">
            <span className="fw-bold">105°</span>/80°
          </div>
        </div>
      </div>
    </div>
  );

  if (loaded) {
    return (
      <div className="container">
        <div className="row">{form}</div>

        <div className="container text-end">
          <div className="row mt-4 justify-content-center">
            <div className="col-5 temp-descript">
              <div className="row">
                <div className="col">
                  <h1 className="d-flex justify-content-end temp">
                    <img
                      src={weather.icon}
                      alt="Weather Icon"
                      className="float-left weather-icon"
                    />
                    <span className="temperature-today">
                      {Math.round(weather.temperature)}°F
                    </span>
                  </h1>
                </div>
              </div>

              <div className="row">
                <p className="d-flex justify-content-end description">
                  <ul>
                    <li>Humidity: {weather.humidity}%</li>
                    <li>Wind: {Math.round(weather.wind / 1.609)} mph</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="col-2 box divider">
              <div className="vr"></div>
            </div>

            <div className="col-5 city-descript">
              <div className="row">
                <div className="col">
                  <h1 className="title-case d-flex justify-content-center">
                    {city}
                  </h1>
                </div>
              </div>

              <div className="row">
                <p className="d-flex justify-content-center">
                  <ul>
                    <li className="title-case d-none d-sm-block text-nowrap">
                      {weather.description}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return [form, forecast];
  }
}
