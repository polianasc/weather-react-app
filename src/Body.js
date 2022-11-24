import React from "react";
import "./Body.css";

export default function Body() {
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
            <h1> Lisbon</h1>
          </div>
          <div>Tuesday 17:23</div>
        </div>
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Clody"
          />
        </div>
        <div className="col-4">
          <div>
            <h1>
              {" "}
              19
              <span className="unit">°C</span>
            </h1>
          </div>
          <div>Clouds</div>
        </div>
      </div>
      <br />
      <div className="result">
        <div className="row">
          <div className="col-6">
            <div>Fells like: 19°</div>
            <div>Min/Max: 18°|20°</div>
          </div>
          <div className="col-6">
            <div>Humidity: 81%</div>
            <div>Wind Speed: 23km/h</div>
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
            <div>20°|17°</div>
          </div>
          <div className="col-2">
            <div>Thu</div>
            <div>image</div>
            <div>19°|14°</div>
          </div>
          <div className="col-2">
            <div>Fri</div>
            <div>image</div>
            <div>17°|13°</div>
          </div>
          <div className="col-2">
            <div>Sat</div>
            <div>image</div>
            <div>17°|10°</div>
          </div>
          <div className="col-2">
            <div>Sun</div>
            <div>image</div>
            <div>17°|11°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
