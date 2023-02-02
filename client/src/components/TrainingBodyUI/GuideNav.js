import React from 'react'
import "./PageContents.css";
import { Link } from "react-router-dom";


const GuideNav = () => {
  return (
    <div className="guide-box">
        <Link to={"../../TrainingBody"}>
        <button className="guide-button"> الرئسية </button>
        </Link>
        <Link to={"../../TrainingBody/Profile/"}>
        <button className="guide-button"> ملف التعريف </button>
        </Link>
        <Link to={"../../TrainingBody/AddSupervisor/"}>
        <button className="guide-button"> تسجيل طلب لاضافة مشرف </button>
        </Link>
        <Link to={"../../TrainingBody/SearchForOpp/"}>
        <button className="guide-button"> البحث عن فرصة تدريبية </button>
        </Link>
        <Link to={"../../TrainingBody/CurrentTraining/"}>
        <button className="guide-button"> التدريب الحالي </button>
        </Link>
        <Link to={"../../TrainingBody/FillForms/"}>
        <button className="guide-button"> تعبئة النماذج المطلوبة </button>
        </Link>
        <Link to={"../../TrainingBody/EvaluateOpportunity/"}>
        <button className="guide-button"> تقيم الفرصة التدريبية </button>
        </Link>
        <Link to={"../../TrainingBody/SignOut/"}>
        <button className="guide-button"> تسجيل الخروج </button>
        </Link>
    </div>
  )
}

export default GuideNav