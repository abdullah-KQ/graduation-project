import React, { useContext, useEffect, useState } from "react";
import HeaderSupervisor from "../../../HeaderSupervisor";
import GuideNav from "../../../GuideNav";
import WebsiteFooter from "../../../../general/WebsiteFooter";
import StudentContex from "../../../../../contex/StudentContex";
import axios from "../../../../../api/axios";
import "../Forms.css";

const URL_Students = "student/";

const MainPageForm = () => {
  const { StudentInfo } = useContext(StudentContex);
  const [Students, setStudents] = useState("");

  const getData = async (e) => {
    try {
      const response = await axios.get(
        URL_Students + StudentInfo.UserName + "/",
        {}
      );
      setStudents(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <HeaderSupervisor />
      <div className="main-div">
        <div className="Form-box">
          <div className="Students-info">
            <p className="p-Students-Card">
              : الرقم الجامعي
              <br />
              {Students.Uni_id}
              <br />
              <br />
              : رقم الجوال الطالب
              <br />
              {StudentInfo.Phone_num}
              <br />
              <br />
              : اسم مسؤول التدريب
              <br />
              {Students.Uni_id}
              <br />
              <br />
              : رقم مسؤول التدريب
              <br />
              {StudentInfo.Phone_num}
            </p>
            <p className="p-Students-Card">
              : اسم الطالب
              <br />
              {StudentInfo.Fullname}
              <br />
              <br />
              : البريد الطالب الاكتروني
              <br />
              {StudentInfo.Email}
              <br />
              <br />
              : اسم جهة التدريب
              <br />
              {StudentInfo.Fullname}
              <br />
              <br />
              : منصب مسؤول التدريب
              <br />
              {StudentInfo.Email}
            </p>
          </div>
          <div className="Students-Card">
            <button className="button-form">طباعة النموذج</button>
            <button className="button-form">عرض النموذج</button>

            <p className="p-Students-Card">
              : النموذج الاول
              <br />
              Training Opportunities Form
              <br />
              <br />
              : الحالة
              <br />
              مكتمل
            </p>
          </div>
          <div className="Students-Card">
            <button className="button-form">طباعة النموذج</button>
            <button className="button-form">عرض النموذج</button>

            <p className="p-Students-Card">
              : النموذج الثاني
              <br />
              Cooperative Training Registration Form
              <br />
              <br />
              : الحالة
              <br />
              غير مكتمل
            </p>
          </div>
        </div>
        <GuideNav />
      </div>
      <WebsiteFooter />
      مسؤولمسؤولمسؤولمسؤولمسؤول
    </div>
  );
};

export default MainPageForm;
