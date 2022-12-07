import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="ForecastDay"> {day()}</div>
      <div className="ForecastIcon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
          width="55"
        />
      </div>
      <div>
        {" "}
        <span className="ForecastMin"> {minTemperature()}</span>{" "}
        <span className="ForecastMax"> {maxTemperature()}</span>
      </div>
    </div>
  );
}
