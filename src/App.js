import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"


function App() {
  return (

      
    
    <Router>
       <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path={"Home"} component={Home} />
            </Switch>
            <Footer />
        </div>
    </Router>


    
  );
}

export default App;
