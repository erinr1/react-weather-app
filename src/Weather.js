import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";

export default function Weather() {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("New York");

  function showWeather(response) {
    setLoaded(true);
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      description: response.data.weather[0].main,
      wind: response.data.wind.speed,
      feel: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function search(event) {
    const apiKey = "5354b60afda2b7800186c06153932396";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <div className="container app-container">
          <div className="row">
            <div className="col-8 top-left">
              <div className="row">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="city"
                    placeholder="Search for a city..."
                    autoComplete="off"
                    onChange={updateCity}
                  />
                  <button className="current-location-button ms-1">
                    🔍 Search
                  </button>
                </form>

                <div className="current-weather">
                  <div className="row">
                    <CurrentWeather data={weatherData} />
                  </div>
                </div>
              </div>
              <HourlyForecast />
            </div>
            <div className="col-1"></div>
            <div className="col-3 daily-forecast">
              <div>daily forecast</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <div>"Loading...";</div>;
  }
}
