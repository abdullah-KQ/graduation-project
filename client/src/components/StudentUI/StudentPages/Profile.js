import React, {useContext}from "react";
import HeaderUser from "../HeaderUser";
import GuideNav from "../GuideNav";
import WebsiteFooter from "../../general/WebsiteFooter";
import "../PageContents.css";
import  StudentContex  from "../../../contex/StudentContex";


const Profile = () => {
  const {StudentInfo} =useContext(StudentContex)

  const fullname = StudentInfo.UserName;
  const username = "abdullah_k";
  const email ="abdullah@gmail.com"
  const college = " college ";
  const department = " department";
  const UID = " 4001071";
  const supervisor = " لا يوجد ";
  const CurrentTraining = " لا يوجد ";
  return (
    <div>
      <HeaderUser />
      <div className="main-div">
        <div>
          <div className="info-box">
            <div className="user-info">
              <p className="p-info">
                :الرقم الجامعي
                <br />
                {UID}
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
                {fullname}
                <br />
                <br />
                :اسم المستخدم
                <br />
                {username}
                <br />
                <br />
                :البريد الاكتروني
                <br />
                {email}
                <br />
                <br />
                :الكلية
                <br />
                {college}
                <br /> <br />
                :التخصص
                <br />
                {department}
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
