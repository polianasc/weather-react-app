import React, { useState } from "react";
import axios from "axios";
import WeatherInfoResult from "./WeatherInfoResult";
import { RotatingLines } from "react-loader-spinner";
import WeatherForecast from "./WeatherForecast";
import "./Body.css";

export default function Body(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      iconDescriprion: response.data.condition.icon,
      fellsLike: response.data.temperature.feels_like,
      minTemp: 11,
      maxTemp: 12,
      humidity: response.data.temperature.humidity,
      windSpeed: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
    });
  }

  function search() {
    const apiKey = "5f4ct94006e2db5b2a37oa714faf838c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Body">
        <br />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="type a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <br />
        <WeatherInfoResult data={weatherData} />
        <br />
        <div className="Forecast">
          <WeatherForecast city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();

    return (
      <div>
        <RotatingLines
          strokeColor="#875df12c"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }
}
