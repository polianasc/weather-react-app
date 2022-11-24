import "./App.css";
import Weather from "./Weather.js";
import Body from "./Body.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <br />

        <Body defaultCity="Berlin" />
        <footer>
          🧘‍♀️{" "}
          <a
            href="https://github.com/polianasc/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source
          </a>{" "}
          coded by Poli Schuelter 👩‍💻
        </footer>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Weather />
      </div>
    </div>
  );
}

export default App;
