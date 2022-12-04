import React from "react";
import "./Forecast.css";

export default function Forecast() {
  let apiKey = "5f4ct94006e2db5b2a37oa714faf838c";
  let city = "London";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div className="ForecastDay">Tue</div>
          <div className="ForecastIcon">image</div>
          <div>
            {" "}
            <span className="ForecastMin"> 9°</span>|{" "}
            <span className="ForecastMax"> 14°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
