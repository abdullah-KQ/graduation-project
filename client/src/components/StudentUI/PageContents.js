import React from "react";
import "./PageContents.css";

const PageContents = () => {
  const fullname = "abdullah";
  const supervisor = " khaled";
  const form = " لا توجد ";
  const department = " department";

  return (
    <div className="main-div">
      <div>
        <div className="info-box">
          <div className="user-info">
            <p className="p-info">
              :المشرف الجامعي
              <br />
              {supervisor}
              <br />
              <br />
              <button className="user-info-button">لمزيد من المعلومات </button>
              <br />
              <br />
            </p>
            <p className="p-info">
              :فرص التدريب
              <br />
              لا يتوجد فرص تدريب
              <br />
              <br />
              <button className="user-info-button"> للبحث عن فرص تدريب </button>
            </p>
          </div>
          <div className="user-info">
            <p className="p-info">
              :الاسم
              <br />
              {fullname}
              <br />
              :التخصص
              <br />
              {department}
              <br />
            </p>
            <button className="user-info-button">
              {" "}
              للمزيد عن الملف الشخصي{" "}
            </button>
            <p className="p-info">
              <br />
              :النماذج المطلوب تعبئتها
              <br />
              {form}
              <br />
            </p>
            <button className="user-info-button"> لتعبئة النماذج </button>
          </div>
        </div>
      </div>
      <div className="guide-box">
        <button className="guide-button"> ملف التعريف </button>
        <button className="guide-button"> تسجيل طلب لاضافة مشرف </button>
        <button className="guide-button"> البحث عن فرصة تدريبية </button>
        <button className="guide-button"> التدريب الحالي </button>
        <button className="guide-button"> تعبئة النماذج المطلوبة </button>
        <button className="guide-button"> تقيم الفرصة التدريبية </button>
        <button className="guide-button"> تسجيل الخروج </button>
      </div>
    </div>
  );
};

export default PageContents;
