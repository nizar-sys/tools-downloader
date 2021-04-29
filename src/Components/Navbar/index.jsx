import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "font-awesome/css/font-awesome.min.css";
import "./Navbar.scss";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          id="mainNav"
        >
          <div className="container">
            <Link className="navbar-brand js-scroll-trigger" to="/">
              <i style={{ color: "white" }}>Downloader -</i>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/">
                    <i className="fa fa-home"></i> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/yt">
                    <i className="fa fa-youtube"></i> YouTube Downloader
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/request"
                    className="nav-link js-scroll-trigger"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <i className="fa fa-sticky-note"></i> Request Tools
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}
export default Navbar;
