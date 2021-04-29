import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class ResultPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { music } = this.props;
    console.log(music);
    return (
      <Fragment>
        <div className="card mt-2 my-5">
          <img src={music.image} alt="img" className="card-img" />
          <div className="card-body">
            <h4 className="text-center">
              <i className="fa fa-youtube"></i> {music.title}
            </h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Bit</th>
                  <th scope="col">Size</th>
                  <th scope="col">Type</th>
                  <th scope="col">Download</th>
                </tr>
              </thead>
              <tbody>
                {music.data.length > 0
                  ? music.data.map((data) => {
                      return (
                        <tr>
                          <th scope="row">{data.bit}</th>
                          <td>{data.size}</td>
                          <td>{data.type}</td>
                          <td>
                            <a href={data.link} className="btn btn-success"><i className="fa fa-download"></i> Download</a>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ResultPage;
