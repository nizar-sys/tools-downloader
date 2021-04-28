import React, { Component } from "react";
import "./Footer.scss";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer fixed-bottom bg-dark d-flex">
        <div className="footer-brand">
          <h4>Downloader</h4>
        </div>
        <p className="text-footer mt-1">Copyright &copy; 2021. Muhamad Nizar. <i>All Right Reserved</i></p>
      </footer>
    );
  }
}
export default Footer;
