import React, { useState } from "react";

export default function UnitCoversion(props) {
  return (
    <div className="UnitConversion">
      <span className="city-temp ms-2">{Math.round(props.fahrenheit)}</span>
      <span className="index ms-1">F°</span>
    </div>
  );
}
