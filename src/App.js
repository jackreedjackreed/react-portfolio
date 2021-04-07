import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Home from "../pages/Home"


function App() {
  return (

    <div>
      <NavBar />
    
    <Router>
       <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
            
            <Route path={"Home"} component={Home} />
            
        </div>

        <Footer />
    </Router>

    </div>

    
  );
}

export default App;
