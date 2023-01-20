import React, { Component } from "react";
import "../general/general.css";
import imgTaibah from "../img/img for taibah.jpg";
import "./BodyStyles.css";
import { Link } from "react-router-dom";

class Introduction extends Component {
  render() {
    return (
      <div>
        <div className="Introduction" id="Introduction">
          <div className="Introduction-background">
            <p className="Introduction-p">Taibah Training Platform</p>
          </div>
        </div>
        <div className="About-website" id="About-website">
          <div>
            <img src={imgTaibah} className="img-for-taibah" />
          </div>
          <div className="About-website-right">
            <div>
              <p className="p-About-website-title">منصة طيبة للتدريب</p>
              <p className="p-About-website">
                مرحبا بكم في "منصة طيبة للتدريب" برنامج تدريب الطلاب
                الميداني والذي يهدف إلى تسهل التواصل بين الطالب و جهات التدريب
                بحث يجمع جهات الاتدريب في منصة واحدة مما يسهل وصل الطالب الى جهة
                التدريب
              </p>
            </div>
            <div className="div-button-About-website">
              <Link to="/Login">
                <button className="button-About-website">تسجيل دخول</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
