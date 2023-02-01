import React, { useContext,useEffect } from "react";
import "./HeaderStylesUser.css";
import "../../components/general/general.css";
import imgTaibah from "../img/Taibah Training Platform.png";
import { Link } from "react-router-dom";
import  StudentContex  from "../../contex/StudentContex";


function HeaderUser()  {
const {StudentInfo} =useContext(StudentContex)

    return (
      <div className="header">
        <div className="header-lift">
        <Link to={"../../Student/Profile/"}>
          <button className="button-profile">    
            {StudentInfo.UserName}
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

export default HeaderUser;
