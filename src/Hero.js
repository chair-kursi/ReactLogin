import React from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

const Hero = ({ handleLogout, setShowLogin }) => {
  return (
    <>
      <section className="hero">
        <nav>
          <h2>Welcome</h2>
          {setShowLogin(false)}
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </section>
      <div className="non__login">
        <h1>
          Welcome To The World of <span>React</span>
        </h1>
        <p>Some Important backbones of React !!</p>
        <div className="row">
          <Link to="/content" className="linkk elements">
            <div className="bg">
              <img
                src="https://www.pngarts.com/files/3/Cool-Avatar-PNG-Free-Download.png"
                alt=""
              />
              <p>Routing</p>
            </div>
          </Link>
          <Link to="/content" className="linkk elements">
            <div className="bg">
              <img
                src="https://lh3.googleusercontent.com/proxy/c7ehm2018yzZ-dGJi9M8RypbQIPaj-xgKhiKC0-ExCbx0FchZP1F-c94UdgwBV0MOTShs4H7cOnib6QcqTHhfN16jeD8C3TwnC5vKmxBgzm7"
                alt=""
              />
              <p>Hooks</p>
            </div>
          </Link>
          <Link to="/content" className="linkk elements">
            <div className="bg">
              <img
                src="https://lh3.googleusercontent.com/proxy/upXDl-uSeqqmr1DBJDQjw3aMpRJlltgZYcBJ9CEkVOt8vBz98V0Rud_2zX_CtHFlv6mnaA4sjW7E5VKet0BsZYxNxV75hMWFkHGfzRtGz-9I"
                alt=""
              />
              <p>See More!!</p>
            </div>
          </Link>
          <Link to="/projects" className="linkk elements">
            <div className="bg">
              <img
                src="https://art.ngfiles.com/images/1416000/1416404_alert222_script-alert-1-script.png?f1599429715"
                alt=""
              />
              <p>My Projects</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
