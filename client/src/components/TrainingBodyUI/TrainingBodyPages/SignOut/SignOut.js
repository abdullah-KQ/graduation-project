import React, {useContext} from 'react'
import HeaderTrainingBody from "../../HeaderTrainingBody";
import GuideNav from "../../GuideNav";
import WebsiteFooter from "../../../general/WebsiteFooter";
import "./SignOut.css"
import imgTaibah from "../../../img/TTF.jpg";
import { useNavigate  } from "react-router-dom";
import TrainingBodyContex from '../../../../contex/TrainingBodyContex';


const SignOut = () => {
  const {setTrainingBodyInfo} =useContext(TrainingBodyContex)

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
  setTrainingBodyInfo({
    UserName:"",
    Fullname: "" ,
    Phone_num: "" ,
    Email: ""  ,
    Role: "",
    Uni_id: "",
    Department: "" ,
    College: "",
  })
  navigate("/");
}
  return (
    <div>
    <HeaderTrainingBody />
    <div className="main-div">
    <div className="SignOut-box">
    <img src={imgTaibah} className="img-logo-SignOut" alt="Taibah traing icon" />
    <p className="SignOut-p">
      هل تريد تسجيل الخروج ؟
    </p>
    <button className="SignOut-button" onClick={handleClick}>
      تسجيل الخروج
    </button>
    </div>
    <GuideNav />
    </div>
    <WebsiteFooter />
    </div>
  )
}

export default SignOut