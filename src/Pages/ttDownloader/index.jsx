import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Swal from "sweetalert2";
import axios from "axios";
import "./YT.scss";
import ResultPage from "../result";
import ResultTT from "../resultTT";

class ttDownloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      isLoading: false,
      result: [],
    };
  }

  handleUrl = (e) => {
    let url = e.target.value;
    this.setState({
      url: url,
      isLoading: false,
    });
  };

  getData = () => {
    this.setState({
      isLoading: true,
    });
    let { url } = this.state;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://rizkydev-api.herokuapp.com/tiktok?url=${url}`
      )
      .then((res) => {
        this.setState({
          isLoading: false,
          result: res,
        });
      });
  };

  render() {
    const { result, isLoading } = this.state;
    console.log(isLoading);
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="text-center">
                    <i className="fa fa-play"></i> TikTok Downloader
                  </h4>
                  <div className="form-group">
                    <input
                      type="text"
                      name="url"
                      id="url"
                      onKeyUp={this.handleUrl}
                      placeholder="https://vt.tiktok.com/ZSJrbbK4L/"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    {isLoading === false ? (
                      <button
                        type="submit"
                        name="submit"
                        className="btn btn-info btn-block"
                        onClick={this.getData}
                      >
                        <i className="fa fa-download"></i> Download
                      </button>
                    ) : (
                      <button
                        type="submit"
                        name="submit"
                        disabled
                        className="btn btn-info btn-block"
                        onClick={this.getData}
                      >
                        <i className="fa fa-download"></i> Loading
                      </button>
                    )}
                  </div>
                  {result.status == 200 ? (
                    <ResultTT result={result.data} />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ttDownloader;
