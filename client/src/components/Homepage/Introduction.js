import React from "react";
import "../general/general.css";
import imgTaibah from "../img/img for taibah.jpg";
import "./BodyStyles.css";
import { Link } from "react-router-dom";

function Introduction()  {

    return (
      <div>
        <div className="Introduction" id="Introduction">
          <div className="Introduction-background">
            <p className="Introduction-p">Taibah Training Finder</p>
          </div>
        </div>
        <div className="About-website" id="About-website">
          <div>
            <img src={imgTaibah} className="img-for-taibah" />
          </div>
          <div className="About-website-right">
            <div>
              <p className="p-About-website-title">باحث طيبة للتدريب </p>
              <p className="p-About-website">
                مرحبا بكم في "باحث طيبة للتدريب"  
                الذي يهدف إلى تسهيل التواصل بين الطالب وجهات التدريب،
                حيث يجمع جهات التدريب في موقع واحد يسهل على الطالب ايجاد فرص التدريب والتقديم عليها.
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

export default Introduction;
