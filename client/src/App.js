import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routes from "./Routes";
import { useUser } from "./context/UserContext";

function App() {
  const { currentUser, logout } = useUser();
  return (
    <div className="App">
      <Header currentUser={currentUser} logout={logout} />
      <div className="content">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
