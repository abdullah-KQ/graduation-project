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
      <Link to="/register/Student">
      <button className="registerButton"> 
        طالب 
      </button>
      </Link>
  </div>
  <div className="M-registr-box">
    <img src={supervisorIcon} className="icon"/>
    <Link to="/register/Supervisor">
    <button className="registerButton">
      مشرف جامعي
    </button>
    </Link>
  </div>
  <div className="R-registr-box">
    <img src={trainingBodyIcon} className="icon"/>
    <Link to="/register/TrainingBody">
    <button className="registerButton">
      جهة تدريب
    </button>
    </Link>
  </div>
</div>
    );
  }
}

export default RegistrMainBox;