import React from "react";
import DisplayDate from "./DisplayDate";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";

export default function CurrentWeather(props) {
  return (
    <div className="currentWeather">
      <h4 className="mt-2 current-city">{props.data.city}</h4>
      <h6 className="mb-3 date-time">
        <DisplayDate date={props.data.date} />
      </h6>
      <div className="row">
        <div className="col-sm-8 d-flex align-items-center current-temp">
          <WeatherIcon code={props.data.icon} color="#142c4c" />
          <UnitConversion fahrenheit={props.data.temp} />
        </div>

        <div className="col-sm-4 current-precipt-info">
          <div className="row">
            <div className="current-condition">{props.data.description}</div>
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
