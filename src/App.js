import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <header className="App-header">
      <div className="App container">
        <h1 className="mt-4 mb-4">Weather App</h1>
      </div>
      <Weather city="Austin" />
    </header>
  );
}

export default App;
