import React from "react";
import { Link } from "react-router-dom";
import studentIcon from "../img/student-icon.jpg";
import supervisorIcon from "../img/supervisor-icon.png";
import trainingBodyIcon from "../img/training-body-icon.webp";
import "./registerPageBody.css"

function RegistrMainBox(){
  
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

export default RegistrMainBox;