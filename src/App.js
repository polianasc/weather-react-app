import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather APP</h1>
        <Weather />
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
      </div>
    </div>
  );
}

export default App;
