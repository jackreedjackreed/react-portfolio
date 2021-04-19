import React from "react"
import {Link} from "react-router-dom"


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="../../index.html">jack reed</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to={"/web-dev.html"}>web dev</Link>
                <Link className="nav-link" to={"/portfolio.html"}>portfolio</Link>
                <Link className="nav-link" to={"/contact.html"}>contact</Link>
                
              </div>
            </div>
          </nav>
    )
}

export default NavBar