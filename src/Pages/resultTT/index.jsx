import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class ResultTT extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { result } = this.props;
    console.log(result);
    return (
      <Fragment>
        <div className="card mt-2 my-5">
          <div className="card-body">
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col-md-6">VIDEO</th>
                  <th scope="col-md-6">SOUND</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {result.video.length > 0
                    ? result.video.map((video) => {
                      console.log(video.server-2)
                      })
                    : null}
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ResultTT;
