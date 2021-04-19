import React from 'react';
import welcomePic from "../assets/images/IMG_5184 (1).jpeg"
import selfPic from "../assets/images/bio-pic.png"

function Home() {
    return (


        <div>
            <div id="welcome-card" className="card bg-dark text-white">
                <img className="card-img" src={welcomePic} alt="welcome"></img>
                <div className="card-img-overlay">
                    <h5 className="card-title">welcome</h5>
                </div>
        </div>

    <br></br><br></br>

    {/* <!-- bio image --> */}
    <div className="jumbotron-fluid background bg-dark border border-light">
        <div className="conatiner-fluid text-center heading p-5 m-3">
            <div className="d-sm-flex flex-row">
                <div className="flex-fill">
                      <img id="bio-pic" className="img-fluid mr-3 w-7 text-center text-white border border-light" src={selfPic} alt="self"></img>
                </div>
            </div>
          </div>
        </div>
      {/* </div> */}

    {/* <!-- bio text --> */}
        <div className="container-fluid text-center">
            <h1 className="display-3 text-center">about me</h1>
            <p className="lead text-center">these days i'm learning how to code</p>
        </div>       
              </div>   
          
    )
}


export default Home