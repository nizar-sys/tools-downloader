import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./Navbar.scss";
import { Link } from "react-router-dom";

class Navbar extends Component {
  componentDidMount() {
    (function () {
      if (document.querySelector("#top-nav-toggle")) {
        var navToggle = document.querySelector("#top-nav-toggle");

        function watchNavClose(e) {
          var topNav = document.querySelector(".top-bar");
          if (!e.path.includes(topNav)) {
            openCloseNav();
            document.documentElement.removeEventListener(
              "click",
              watchNavClose
            );
          }
        }

        function openCloseNav() {
          var navToggle = document.querySelector("#top-nav-toggle");

          if (!navToggle.classList.contains("closed")) {
            navToggle.classList.add("closed");
            document
              .querySelector("#top-bar__nav")
              .classList.remove("collapsed");
            document
              .querySelector("html")
              .addEventListener("click", watchNavClose);
          } else {
            navToggle.classList.remove("closed");
            document.querySelector("#top-bar__nav").classList.add("collapsed");
            document.documentElement.removeEventListener(
              "click",
              watchNavClose
            );
          }
        }

        navToggle.addEventListener("click", openCloseNav);
      }
    })();
  }
  render() {
    return (
      <Fragment>
        <div className="top-bar">
          <button className="top-bar__nav-toggle hamburger" id="top-nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="/" className="top-bar__brand">
            Downloader
          </a>
          <div className="top-bar__social mx-auto">
            <a href="https://github.com/nizar-sys" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/jokiicode" target="_blank">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
          <nav className="top-bar__nav collapsed" id="top-bar__nav">
            <ul className="top-bar__nav-list ">
              <li>
                <Link to="#"><i className="fa fa-youtube"></i> YouTube Downloader</Link>
              </li>
              <li>
                <Link to="#"><i className="fa fa-play-circle"></i> TikTok Downloader</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Fragment>
    );
  }
}
export default Navbar;
