import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./App.css";
export default function Weather(props) {
  const [weatherDate, setWeatherDate] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherDate({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherDate.ready) {
    return (
      <div className="weather-app">
        <h1>{weatherDate.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherDate.date} />
          </li>
        </ul>
        <h2>
          <span>{Math.round(weatherDate.temperature)}</span> <a href="/">℃</a> |{" "}
          <a href="/">℉</a>
          <img src={weatherDate.icon} alt="Clear" />
        </h2>
        <h3>
          <ul>
            <li>Humidity: {weatherDate.humidity} %</li>
            <li>Wind:{weatherDate.wind} km/h</li>
            <li className="text-capitalize">
              <span>{weatherDate.description}</span>
            </li>
          </ul>
        </h3>

        <div className="input-group mb-3">
          <form className="search-form">
            <div className="row">
              <div className="col"></div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your city"
                  aria-label="City"
                  aria-describedby="button-addon2"
                />
              </div>
              <div className="col-2">
                <button className="btn btn-outline-secondary" type="submit">
                  Search
                </button>
              </div>
              <div className="col-2">
                <button className="btn btn-success ">Current location </button>
              </div>
              <div className="col"></div>
            </div>
          </form>
        </div>
        <p className="link mt-5">
          <small>
            <a
              href="https://github.com/OlesiaOk/weatherapp"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Open source code{" "}
            </a>{" "}
            by Olesia Okhrimenko
          </small>
        </p>
      </div>
    );
  } else {
    const apiKey = "3b6b66f380d0f8c6b4889aa8f7d07c34";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=3b6b66f380d0f8c6b4889aa8f7d07c34&units=metric`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}
