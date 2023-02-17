import React from "react";
import "./HeaderStyles.css";
import "./general.css";
import imgTaibah from "../img/TTF.jpg";
import { Link } from "react-router-dom";

function Header()  {
    return (
      <div className="header">
        <div className="header-lift">
          <div>
            <Link to="/Login">
              <button className="login-button">تسجيل دخول</button>
            </Link>
          </div>
          <div>
            <Link to="/register">
              <button className="register-button">حساب جديد</button>
            </Link>
          </div>
        </div>
        <div className="header-mid">
          <div>
            <Link to="/">
              <button className="header-button" data-link="connect-with-us">
                اتصل بنا
              </button>
            </Link>
          </div>
          <div>
            <Link to="/">
              <button
                className="header-button"
                data-link="View-training-opportunities"
              >
                جهات التدريب
              </button>
            </Link>
          </div>
          <div>
            <Link to="/">
              <button className="header-button" data-link="About-website">
                عن الموقع
              </button>
            </Link>
          </div>
          <div>
            <Link to="/">
              <button className="header-button" data-link="Introduction">
                الرئيسية
              </button>
            </Link>
          </div>
        </div>
        <div className="header-right">
          <img src={imgTaibah} className="img-logo" alt="Taibah traing icon" />
        </div>
      </div>
    );
  }

export default Header;
