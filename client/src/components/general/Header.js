import React, { Component } from "react";
import "./HeaderStyles.css";
import "./general.css";
import imgTaibah from "../img/Taibah Training Platform.png";
import { useNavigate } from "react-router-dom";


class Header extends Component {
  
    navigate = useNavigate(); 
    routeChange = () =>{ 
    let path = ""; 
    navigate(path);
  }
/*
  links = document.querySelectorAll(".header-button");
  links.forEach(function (item) {
      item.addEventListener("click", function () {
         const element = document.getElementById(item.getAttribute("data-link"));
         element.scrollIntoView()
      })
  })
*/
  render() {
    return (
      <div className="header">
        <div className="header-lift">
          <div>
            <button className="login-button"  onClick={Header.routeChange("http://localhost:3000/register")} >
              تسجيل دخول
            </button>
          </div>
          <div>
            <button className="register-button" onClick={Header.routeChange("http://localhost:3000/register")} >
              حساب جديد
            </button>
          </div>
        </div>
        <div className="header-mid">
          <div>
            <button className="header-button" data-link="connect-with-us">
              اتصل بنا
            </button>
          </div>
          <div>
            <button
              className="header-button"
              data-link="View-training-opportunities"
            >
              جهات التدريب
            </button>
          </div>
          <div>
            <button className="header-button" data-link="About-website">
              عن الموقع
            </button>
          </div>
          <div>
            <button className="header-button" data-link="Introduction">
              الرئيسية
            </button>
          </div>
        </div>
        <div className="header-right">
          <img src={imgTaibah} className="img-logo" alt="Taibah traing icon"/>
        </div>
      </div>
    );
  }
}

export default Header;
