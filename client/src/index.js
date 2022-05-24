import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import { UserProvider } from "./context/UserContext";
import { ResourcesProvider } from "./context/ResourcesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResourcesProvider>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </ResourcesProvider>
  </React.StrictMode>
);
