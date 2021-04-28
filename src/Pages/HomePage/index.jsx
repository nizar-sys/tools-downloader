import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./HomePage.scss";
import logo from "../../img/logo.jpg";

class HomePage extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row mt-1">
          <div className="col-md-12">
            {/* Jumbotron */}
            <div class="jumbotron jumbotron-fluid uwuJumbotron">
              <div class="container">
                <div className="jumbotron-img d-flex justify-content-center">
                  <img src={logo} alt="Logo" />
                </div>
                <div className="title-jumbotron">
                  <h2 className="uwuTitle">
                    <i className="fa fa-desktop"></i> Tools Downloader
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
