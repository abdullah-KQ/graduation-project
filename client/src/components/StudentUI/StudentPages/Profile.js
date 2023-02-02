import React, {useContext}from "react";
import HeaderStudent from "../HeaderStudent";
import GuideNav from "../GuideNav";
import WebsiteFooter from "../../general/WebsiteFooter";
import "../PageContents.css";
import  StudentContex  from "../../../contex/StudentContex";


const Profile = () => {
  const {StudentInfo} =useContext(StudentContex)

  const supervisor = " لا يوجد ";
  const CurrentTraining = " لا يوجد ";
  return (
    <div>
      <HeaderStudent />
      <div className="main-div">
        <div>
          <div className="info-box">
            <div className="user-info">
              <p className="p-info">
                :الرقم الجامعي
                <br />
                {StudentInfo.Uni_id}
                <br />
                <br />
                :المشرف الجامعي
                <br />
                {supervisor}
                <br />
                <br />
                :التدريب الحالي
                <br />
                {CurrentTraining}
                <br />
                <br />
              </p>
            </div>
            <div className="user-info">
              <p className="p-info">
                :الاسم
                <br />
                {StudentInfo.Fullname}
                <br />
                <br />
                :اسم المستخدم
                <br />
                {StudentInfo.UserName}
                <br />
                <br />
                :البريد الاكتروني
                <br />
                {StudentInfo.Email}
                <br />
                <br />
                :الكلية
                <br />
                {StudentInfo.College}
                <br /> <br />
                :التخصص
                <br />
                {StudentInfo.Department}
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <GuideNav />
      </div>
      <WebsiteFooter />
    </div>
  );
};

export default Profile;
