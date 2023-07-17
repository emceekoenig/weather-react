import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-body">
          <Weather city="Austin" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
