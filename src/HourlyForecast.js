import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./hourlyforecast.css";

export default function HourlyForecast() {
  return (
    <div className="hourlyForecast row justify-content-center">
      <div className="col">
        <div className="hourlyDay mb-1">Monday</div>
        <WeatherIcon code="01d" size={30} color="white" />
        <div className="hourlyTemp">30°</div>
      </div>
    </div>
  );
}
