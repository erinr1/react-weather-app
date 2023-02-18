import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import Footer from "./Footer";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function showWeather(response) {
    console.log(response);
    setLoaded(true);
    setWeatherData({
      city: props.defaultCity,
      temp: response.data.main.temp,
      description: response.data.weather[0].main,
      wind: response.data.wind.speed,
      feel: response.data.main.feels_like,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (loaded) {
    return (
      <div className="Weather">
        <div className="container app-container">
          <div className="row">
            <div className="col-8 top-left">
              <div className="row">
                <form>
                  <input
                    type="text"
                    name="city"
                    placeholder="Search for a city..."
                    autocomplete="off"
                  />
                  <button className="mag-button">🔍</button>
                  <button className="current-location-button">
                    Current Location
                  </button>
                </form>

                <div className="current-weather">
                  <div className="row">
                    <h4 className="current-city">{weatherData.city}</h4>
                    <h6 className="mb-2 date-time">Wednesday Jan 4, 2023</h6>
                    <div className="row">
                      <div className="col-sm-8 d-flex align-items-center current-temp">
                        <img
                          src={weatherData.icon}
                          alt="Weather Icon"
                          className="condition-icon"
                        />

                        <span className="city-temp">
                          {Math.round(weatherData.temp)}
                        </span>
                        <span className="index">
                          <a className="index-links active" href="/">
                            F°
                          </a>
                          |
                          <a className="index-links" href="/">
                            C°
                          </a>
                        </span>
                      </div>

                      <div className="col-sm-4 current-precipt-info">
                        <div className="row">
                          <div className="current-condition">
                            {weatherData.description}

                            <span></span>
                          </div>
                          <div className="current-wind">
                            <span>{Math.round(weatherData.wind)} 💨 </span>
                            <span></span> km/h
                          </div>
                          <div className="feels-like">
                            Feels like{" "}
                            <span>{Math.round(weatherData.feel)}</span>°F
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="hourly-forecast">hourly forecast</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-3 daily-forecast">
              <div>daily forecast</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    const apiKey = "5354b60afda2b7800186c06153932396";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(showWeather);

    return "Loading...";
  }
}
