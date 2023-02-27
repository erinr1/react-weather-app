import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="hourlyDay mb-1">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={30} color="white" />
      <div className="hourlyTemp">
        {Math.round(props.data.temp.max)}° |{" "}
        <span className="minTemp">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
