import React, { Component } from "react";
import studentIcon from "../img/student-icon.jpg";
import supervisorIcon from "../img/supervisor-icon.png";
import trainingBodyIcon from "../img/training-body-icon.webp";
import "./registerPageBody.css"

class RegistrMainBox extends Component {
  
  render() {
    return (
<div className="registr-main-box">
  <div className="L-registr-box">
      <img src={studentIcon} className="icon"/>
      <button className="registerButton"> 
        طالب 
      </button>
  </div>
  <div className="M-registr-box">
    <img src={supervisorIcon} className="icon"/>
    <button className="registerButton">
      مشرف جامعي
    </button>
  </div>
  <div className="R-registr-box">
    <img src={trainingBodyIcon} className="icon"/>
    <button className="registerButton">
      جهة تدريب
    </button>
  </div>
</div>
    );
  }
}

export default RegistrMainBox;