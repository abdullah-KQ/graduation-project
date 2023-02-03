import React from 'react'
import "./PageContents.css";
import { Link } from "react-router-dom";


const GuideNav = () => {
  return (
    <div className="guide-box-m">
        <Link to={"../../Supervisor"}>
        <button className="guide-button"> الرئسية </button>
        </Link>
        <Link to={"../../Supervisor/Profile/"}>
        <button className="guide-button"> ملف التعريف </button>
        </Link>
        <Link to={"../../Supervisor/AddSupervisor/"}>
        <button className="guide-button"> تسجيل طلب لاضافة مشرف </button>
        </Link>
        <Link to={"../../Supervisor/SearchForOpp/"}>
        <button className="guide-button"> البحث عن فرصة تدريبية </button>
        </Link>
        <Link to={"../../Supervisor/CurrentTraining/"}>
        <button className="guide-button"> التدريب الحالي </button>
        </Link>
        <Link to={"../../Supervisor/FillForms/"}>
        <button className="guide-button"> تعبئة النماذج المطلوبة </button>
        </Link>
        <Link to={"../../Supervisor/EvaluateOpportunity/"}>
        <button className="guide-button"> تقيم الفرصة التدريبية </button>
        </Link>
        <Link to={"../../Supervisor/SignOut/"}>
        <button className="guide-button"> تسجيل الخروج </button>
        </Link>
    </div>
  )
}

export default GuideNav