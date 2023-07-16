import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1 className="mt-4 mb-4 text-center">Weather App</h1>
      </header>

      <div className="card">
        <div className="card-body">
          <Weather city="Austin" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
