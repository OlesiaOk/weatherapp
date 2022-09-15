import React from "react";
import "./App.css";
export default function Weather() {
  let weatherData = {
    city: "Kyiv",
    temperature: 22,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "http://openweathermap.org/img/wn/02d@2x.png",
    humidity: 55,
    wind: 5,
  };
  return (
    <div className="weather-app">
      <h1>{weatherData.city}</h1>
      <ul>
        <li>Thu, 26 May 15:25</li>
      </ul>
      <h2>
        <span>{weatherData.temperature}</span> <a href="/">℃</a> |{" "}
        <a href="/">℉</a>
        <img src={weatherData.imgUrl} alt="Clear" />
      </h2>
      <h3>
        <ul>
          <li>Humidity: {weatherData.humidity} %</li>
          <li>Wind:{weatherData.wind} km/h</li>
          <li>
            <span>{weatherData.description}</span>
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
}
