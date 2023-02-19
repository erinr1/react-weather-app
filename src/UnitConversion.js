import React, { useState } from "react";

export default function UnitCoversion(props) {
  let [unit, setUnit] = useState("fahrenheit");

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="UnitConversion">
        <span className="city-temp ms-2">{Math.round(props.fahrenheit)}</span>
        <span className="index ms-1">
          F° |
          <a className="index-links ms-1" href="/" onClick={showCelcius}>
            C°
          </a>
        </span>
      </div>
    );
  } else {
    let celciusTemp = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="UnitConversion">
        <span className="city-temp ms-2">{Math.round(celciusTemp)}</span>
        <span className="index">
          <a className="index-links ms-1" href="/" onClick={showFahrenheit}>
            F°
          </a>{" "}
          | C°
        </span>
      </div>
    );
  }
}
