import React from "react";
import HeaderSupervisor from "../../HeaderSupervisor";
import GuideNav from "../../GuideNav";
import WebsiteFooter from "../../../general/WebsiteFooter";
import imgTaibah from "../../../img/TTF.jpg"
import "./VerifyAccount.css"

const VerifyAccount = () => {
  return (
    <div>
      <HeaderSupervisor />
      <div className="main-div">
        <div className="VerifyAccount-box">
          <img
            src={imgTaibah}
            className="img-logo-VerifyAccount"
            alt="Taibah traing icon"
          />
          <p className="VerifyAccount-p">
          لتوثيق الحساب الرجاء التواصل معنا على 
          <br />
           : البريد الاكتروني التالي 
           <br />
           <br />
           abdullah.k.alqulaiti@gmail.com
          </p>

        </div>
        <GuideNav />
      </div>
      <WebsiteFooter />
    </div>
  );
};

export default VerifyAccount;
