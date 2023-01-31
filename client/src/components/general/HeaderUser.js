import React from "react";
import "./HeaderStylesUser.css";
import "./general.css";
import imgTaibah from "../img/Taibah Training Platform.png";
//import { Link } from "react-router-dom";


const UserName ="anonymous"
function HeaderUser()  {
    return (
      <div className="header">
        <div className="header-lift">
          <button className="button-profile">
            {UserName}
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
        <div className="header-mid">
          
        </div>
        <div className="header-u-right">
          <img src={imgTaibah} className="img-logo" alt="Taibah traing icon" />
        </div>
      </div>
    );
  }

export default HeaderUser;
