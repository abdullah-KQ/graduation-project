import React, {useContext} from 'react'
import HeaderSupervisor from "../../HeaderSupervisor";
import GuideNav from "../../GuideNav";
import WebsiteFooter from "../../../general/WebsiteFooter";
import "./SignOut.css"
import imgTaibah from "../../../img/Taibah Training Platform.png";
import { useNavigate  } from "react-router-dom";
import SupervisorContex from '../../../../contex/SupervisorContex';


const SignOut = () => {
  const {setSupervisorInfo} =useContext(SupervisorContex)

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
  setSupervisorInfo({
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
    <HeaderSupervisor />
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