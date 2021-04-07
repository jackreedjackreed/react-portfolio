import React from "react"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Home from "../pages/Home"


function Directory() {
    return(
        <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <NavBar />
            <Home />
            <Footer />
        </div>
        
    )
}

export default Directory