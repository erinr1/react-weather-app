import React from "react";

export default function DisplayDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (hours > 12) {
    hours = hours - 12;
  }

  let mins = props.date.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }

  return (
    <div className="DisplayDate">
      Last Updated: {day} | {hours}:{mins}
    </div>
  );
}
