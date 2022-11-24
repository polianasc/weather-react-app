import React, { useState } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import "./Body.css";

export default function Body(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
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
      date: "Tuesday 00:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Body">
        <br />
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="type a city..."
                className="form-control"
                autoFocus="on"
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
        <div className="row">
          <div className="col-4">
            <div>
              <h1>{props.defaultCity}</h1>
            </div>
            <div>{weatherData.date}</div>
          </div>
          <div className="col-4">
            <img src={weatherData.icon} alt={weatherData.iconDescriprion} />
          </div>
          <div className="col-4">
            <div>
              <h1>
                {Math.round(weatherData.temperature)}
                <span className="unit">°C</span>
              </h1>
            </div>
            <div className="text-capitalize">{weatherData.description}</div>
          </div>
        </div>
        <br />
        <div className="result">
          <div className="row">
            <div className="col-6">
              <div>Fells like: {Math.round(weatherData.fellsLike)}°</div>
              <div>
                Min/Max: {weatherData.minTemp}°|{weatherData.maxTemp}°
              </div>
            </div>
            <div className="col-6">
              <div>Humidity: {weatherData.humidity}%</div>
              <div>Wind Speed: {Math.round(weatherData.windSpeed)} km/h</div>
            </div>
          </div>
        </div>
        <br />
        <div className="weekResult">
          <div className="row">
            <div className="col-2">
              <div>Tue</div>
              <div>image</div>
              <div>19°|14°</div>
            </div>
            <div className="col-2">
              <div>Wed</div>
              <div>image</div>
              <div>10°|17°</div>
            </div>
            <div className="col-2">
              <div>Thu</div>
              <div>image</div>
              <div>09°|14°</div>
            </div>
            <div className="col-2">
              <div>Fri</div>
              <div>image</div>
              <div>07°|13°</div>
            </div>
            <div className="col-2">
              <div>Sat</div>
              <div>image</div>
              <div>07°|10°</div>
            </div>
            <div className="col-2">
              <div>Sun</div>
              <div>image</div>
              <div>07°|11°</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5f4ct94006e2db5b2a37oa714faf838c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

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
