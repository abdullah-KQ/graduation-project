import React from 'react'
import "./../../PageContents.css";
import { Link } from "react-router-dom";


const GuideNav = () => {
  return (
    <div className="guide-box-m">
        <Link to={"../../../Supervisor"}>
        <button className="guide-button"> الرئسية </button>
        </Link>
        <Link to={"../../../Supervisor/Profile/"}>
        <button className="guide-button"> ملف التعريف </button>
        </Link>
        <Link to={"../../../Supervisor/verifyAccount/"}>
        <button className="guide-button"> لتوثيق الحساب </button>
        </Link>
        <Link to={"../../../Supervisor/AddSuperviseStudents/"}>
        <button className="guide-button"> للاشراف على الطلاب </button>
        </Link>
        <Link to={"../../../Supervisor/SuperviseStudents/"}>
        <button className="guide-button"> الطلاب تحت الإشراف </button>
        </Link>
        <Link to={"../../../Supervisor/FillForms/"}>
        <button className="guide-button"> تعبئة النماذج المطلوبة </button>
        </Link>
        <Link to={"../../../Supervisor/EvaluateOpportunity/"}>
        <button className="guide-button"> تقيم الفرص التدريبية </button>
        </Link>
        <Link to={"../../../Supervisor/SignOut/"}>
        <button className="guide-button"> تسجيل الخروج </button>
        </Link>
    </div>
  )
}

export default GuideNav