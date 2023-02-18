import React, { useState } from "react";
import "../general/general.css";
import "./BodyStyles.css";

function CommonQuestions() {
  const [showQuestion1, setshowQuestion1] = useState(false);
  const [showQuestion2, setshowQuestion2] = useState(false);
    return (
      <div className="CommonQuestions" id="CommonQuestions">
        <div className="CommonQuestions-div">
          <button
            className="CommonQuestions-button"
            onClick={() => {setshowQuestion1(!showQuestion1)}}
          >
           ماهي شروط التسجيل في التدريب الميداني؟
            <span className="material-symbols-outlined">add</span>
          </button>
          {showQuestion1 && (
            <p className="p-CommonQuestions">
              .اكمال 110 ساعة من الخطة الدراسية، اضافة مقرر اختياري تخصص، تسجيل المقرر الاختياري بالتدريب الميداني، الحصول على موافقة جهة التدريب
            </p>
          )}
        </div>
        <div className="CommonQuestions-div">
          <button
            className="CommonQuestions-button"
            onClick={() => {setshowQuestion2(!showQuestion2)}}
          >
            هل التسجيل في الموقع والتقديم على فرصة تدريبية يعني تسجيلي في التدريب الميداني؟
            <span className="material-symbols-outlined">add</span>
          </button>
          {showQuestion2 && (
            <p className="p-CommonQuestions">
              p Common Questions
            </p>
          )}
        </div>
      </div>
    );
  
}

export default CommonQuestions;
