import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./forecast.css";
import axios from "axios";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  const apiKey = `bf54175800a55e59e6c4d6461deeef12`;
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial
`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="DailyForecast ">
      <div className="row ">
        <div className="hourlyDay mb-1">Monday</div>
        <WeatherIcon code="01d" size={30} color="white" />
        <div className="hourlyTemp">
          30° | <span className="minTemp">20°</span>
        </div>
      </div>
    </div>
  );
}
