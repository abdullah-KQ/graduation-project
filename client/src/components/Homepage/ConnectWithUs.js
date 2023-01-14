import React, { Component } from "react";
import "../general/general.css";
import "./BodyStyles.css";

class ConnectWithUs extends Component {
  render() {
    return (
      <div className="connect-with-us" id="connect-with-us">
        <div className="connect-with-us-questions-div">
          <button className="connect-with-us-questions-button">
            connect-with-us-questions
            <span className="material-symbols-outlined">add</span>
          </button>
          <p className="p-connect-with-us-questions">connect-with-us-questions</p>
        </div>
        <div className="connect-with-us-questions-div">
          <button className="connect-with-us-questions-button">
            connect-with-us-questions
            <span className="material-symbols-outlined">add</span>
          </button>
          <p className="p-connect-with-us-questions">connect-with-us-questions</p>
        </div>
      </div>
    );
  }
}

export default ConnectWithUs;
