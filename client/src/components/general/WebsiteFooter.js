import React from "react";
import "./general.css";
import imgTaibah from "../img/taibah universty logo.jpg";
import "../Homepage/BodyStyles.css";


function websiteFooter() {

    return (
        <div className="website-Footer" id="website-Footer">
    <div className="Footer-lift">
      <img src={imgTaibah} className="taibah-logo"/>
    </div>
    <div className="Footer-right">
      <p className="p-Footer-right">
        TTP@gmail.com : للتواصل معنا
      </p>
      <p className="p-Footer-right">
        © 2022 - طيبة للتدريب الميداني | جميع الحقوق محفوظة
      </p>
    </div>
  </div>
    );
  }

export default websiteFooter;