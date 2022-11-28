import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfoResult(props) {
  return (
    <div className="WeatherInfoResult">
      <div className="row">
        <div className="col-4">
          <div>
            <h1>{props.data.city}</h1>
          </div>
          <div>
            <FormatDate date={props.data.date} />
          </div>
        </div>
        <div className="col-4">
          <img src={props.data.icon} alt={props.data.iconDescriprion} />
        </div>
        <div className="col-4">
          <div className="float-left">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="text-capitalize">{props.data.description}</div>
        </div>
      </div>
      <div className="result">
        <div className="row">
          <div className="col-6">
            <div>Fells like: {Math.round(props.data.fellsLike)}°</div>
            <div>
              Min/Max: {props.data.minTemp}°|{props.data.maxTemp}°
            </div>
          </div>
          <div className="col-6">
            <div>Humidity: {props.data.humidity}%</div>
            <div>Wind Speed: {Math.round(props.data.windSpeed)} km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
