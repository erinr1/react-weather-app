import React from "react";
import DisplayDate from "./DisplayDate";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  return (
    <div className="current-weather">
      <h4 className="mt-2 current-city">{props.data.city}</h4>
      <h6 className="mb-3 date-time">
        <DisplayDate date={props.data.date} />
      </h6>
      <div className="row">
        <div className="col-sm-8 d-flex align-items-center current-temp">
          <WeatherIcon code={props.data.icon} />

          <span className="city-temp ms-2">{Math.round(props.data.temp)}</span>
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
              {props.data.description}

              <span></span>
            </div>
            <div className="current-wind">
              <span>{Math.round(props.data.wind)} 💨 </span>
              <span></span> km/h
            </div>
            <div className="feels-like">
              Feels like <span>{Math.round(props.data.feel)}</span>°F
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
