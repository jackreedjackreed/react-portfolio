import React from "react"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="../../index.html">jack reed</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" href="web-dev.html">web dev</a>
                <a className="nav-link" href="portfolio.html">portfolio</a>
                <a className="nav-link" href="contact.html">contact</a>
                
              </div>
            </div>
          </nav>
    )
}

export default NavBar