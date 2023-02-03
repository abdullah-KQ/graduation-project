import React, { useContext } from "react";
import "./HeaderStylesUser.css";
import "../../components/general/general.css";
import imgTaibah from "../img/Taibah Training Platform.png";
import { Link } from "react-router-dom";
import  SupervisorContex  from "../../contex/SupervisorContex";


function HeaderSupervisor()  {
const {SupervisorInfo} =useContext(SupervisorContex)

    return (
      <div className="header">
        <div className="header-lift">
        <Link to={"../../Supervisor/Profile/"}>
          <button className="button-profile">    
            {SupervisorInfo.UserName}
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </Link>
        </div>
        <div className="header-mid">
          
        </div>
        <div className="header-u-right">
          <img src={imgTaibah} className="img-logo" alt="Taibah traing icon" />
        </div>
      </div>
    );
  }

export default HeaderSupervisor;
