import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Link } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header/Header";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Link to="/">
          <button>Dashboard</button>
        </Link>
        <Link to="/wizard">
          <button>Wizard</button>
        </Link>
      </div>
      {routes}
    </HashRouter>
  );
}

export default App;
