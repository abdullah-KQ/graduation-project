import React, { Component } from "react";
import "../general/general.css";
import "./BodyStyles.css";


class ViewTrainingOpportunities extends Component {

  render() {
    return (

    <div className="View-training-opportunities" id="View-training-opportunities">
        <div className="training-opportunity">
            <div className="training-opportunity-box">

            </div>
            <div className="training-opportunity-box">

            </div>
            <div className="training-opportunity-box">

            </div>
            <div className="training-opportunity-box">

            </div>
        </div>
        <div className="training-opportunity-switch">
            <input type="radio" name="switch"/>
            <input type="radio" name="switch"/>
        </div>
    </div>

    );
  }
}

export default ViewTrainingOpportunities;
