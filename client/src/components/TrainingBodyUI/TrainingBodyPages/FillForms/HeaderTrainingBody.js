import React, { useContext } from "react";
import imgTaibah from "../../../img/TTF.jpg";
import { Link } from "react-router-dom";
import  TrainingBodyContex  from "../../../../contex/TrainingBodyContex";


function HeaderTrainingBody()  {
const {TrainingBodyInfo} =useContext(TrainingBodyContex)

    return (
      <div className="header">
        <div className="header-lift">
        <Link to={"../../../TrainingBody/Profile/"}>
          <button className="button-profile">    
            {TrainingBodyInfo.UserName}
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

export default HeaderTrainingBody;
