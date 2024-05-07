import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Notes from "./components/Notes";
import About from "./Nvigazione/About";
import Contatti from "./Nvigazione/Contatti";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route Component={App} path="/" />
        <Route Component={About} path="/about" />
        <Route Component={Contatti} path="/contatti" />
        <Route Component={Notes} path="/note" />
      </Routes>

      {/* <Route Component={Utenti} path="/utenti" /> */}
    </Router>
  </React.StrictMode>
);
