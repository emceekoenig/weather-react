import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <header className="App-header">
      <div className="App container">
        <h1 className="mt-4 mb-4 text-center">Weather App</h1>
      </div>
      <Weather city="Austin" />
      <Footer />
    </header>
  );
}

export default App;
