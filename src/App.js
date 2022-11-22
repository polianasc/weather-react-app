import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <h1>WEATHER APP</h1>
      <Weather />
      <footer>
        🧘‍♀️{" "}
        <a
          href="https://github.com/polianasc/weather-react-app"
          target="_blank"
        >
          Open-source
        </a>{" "}
        coded by Poli Schuelter 👩‍💻
      </footer>
    </div>
  );
}

export default App;
