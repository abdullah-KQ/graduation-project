import React from 'react'
import "./PageContents.css";
import { Link } from "react-router-dom";


const GuideNav = () => {
  return (
    <div className="guide-box-m">
        <Link to={"../../Student"}>
        <button className="guide-button"> الرئسية </button>
        </Link>
        <Link to={"../../Student/Profile/"}>
        <button className="guide-button"> ملف التعريف </button>
        </Link>
        <Link to={"../../Student/AddSupervisor/"}>
        <button className="guide-button"> تسجيل طلب لاضافة مشرف </button>
        </Link>
        <Link to={"../../Student/SearchForOpp/"}>
        <button className="guide-button"> البحث عن فرصة تدريبية </button>
        </Link>
        <Link to={"../../Student/CurrentTraining/"}>
        <button className="guide-button"> التدريب الحالي </button>
        </Link>
        <Link to={"../../Student/FillForms/"}>
        <button className="guide-button"> تعبئة النماذج المطلوبة </button>
        </Link>
        <Link to={"../../Student/EvaluateOpportunity/"}>
        <button className="guide-button"> تقيم الفرصة التدريبية </button>
        </Link>
        <Link to={"../../Student/SignOut/"}>
        <button className="guide-button"> تسجيل الخروج </button>
        </Link>
    </div>
  )
}

export default GuideNav