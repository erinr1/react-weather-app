import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast() {
  return (
    <div className="DailyForecast justify-content-center">
      <div className="row">
        <div className="hourlyDay mb-1">Monday</div>
        <WeatherIcon code="01d" size={30} color="white" />
        <div className="hourlyTemp">
          <span>30°</span>
          <span>20°</span>
        </div>
      </div>
    </div>
  );
}
