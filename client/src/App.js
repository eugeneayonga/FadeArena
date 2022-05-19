import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
