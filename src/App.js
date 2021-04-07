import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory"


function App() {
  return (
    <Router>
      <div>
        <Directory />
      </div>
    </Router>
  );
}

export default App;
