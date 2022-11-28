import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h1 className="temperature">
          {Math.round(props.celsius)}
          <span className="unit">
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              {" "}
              F°{" "}
            </a>{" "}
          </span>
        </h1>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h1 classaName="temperature">
          {Math.round(fahrenheit())}
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C{" "}
            </a>
            | F°{" "}
          </span>
        </h1>
      </div>
    );
  }
}
