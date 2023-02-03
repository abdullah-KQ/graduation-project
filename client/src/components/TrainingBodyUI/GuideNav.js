import React from 'react'
import "./PageContents.css";
import { Link } from "react-router-dom";


const GuideNav = () => {
  return (
    <div className="guide-box-m">
        <Link to={"../../TrainingBody"}>
        <button className="guide-button"> الرئسية </button>
        </Link>
        <Link to={"../../TrainingBody/Profile"}>
        <button className="guide-button"> ملف التعريف </button>
        </Link>
        <Link to={"../../TrainingBody"}>
        <button className="guide-button"> اضافة مشرف منتسب لجهة التدريب </button>
        </Link>
        <Link to={"../../TrainingBody/AddTrainingOpp/"}>
        <button className="guide-button"> اضافة اعلان عن فرصة تدريبية جديدة </button>
        </Link>
        <Link to={"../../TrainingBody"}>
        <button className="guide-button"> الفرص التدريبية  </button>
        </Link>
        <Link to={"../../TrainingBody"}>
        <button className="guide-button"> تعبئة النماذج المطلوبة </button>
        </Link>
        <Link to={"../../TrainingBody/SignOut"}>
        <button className="guide-button"> تسجيل الخروج </button>
        </Link>
    </div>
  )
}

export default GuideNav