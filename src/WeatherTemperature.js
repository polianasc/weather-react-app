import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <h1 className="temperature">
        {Math.round(props.celsius)}
        <span className="unit">°C </span>
      </h1>
    </div>
  );
}
