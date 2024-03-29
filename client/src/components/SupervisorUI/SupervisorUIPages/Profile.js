import React, {useContext}from "react";
import HeaderSupervisor from "../HeaderSupervisor";
import GuideNav from "../GuideNav";
import WebsiteFooter from "../../general/WebsiteFooter";
import "../PageContents.css";
import  SupervisorContex  from "../../../contex/SupervisorContex";


const Profile = () => {
  const {SupervisorInfo} =useContext(SupervisorContex)

  const supervisor = " لا يوجد ";
  const CurrentTraining = " لا يوجد ";
  return (
    <div>
      <HeaderSupervisor />
      <div className="main-div">
        <div>
          <div className="info-box">
            <div className="user-info">
              <p className="p-info">
                :الاسم
                <br />
                {SupervisorInfo.Fullname}
                <br />
                <br />
                :اسم المستخدم
                <br />
                {SupervisorInfo.UserName}
                <br />
                <br />
                :البريد الاكتروني
                <br />
                {SupervisorInfo.Email}
                <br />
                <br />
                :الكلية
                <br />
                {SupervisorInfo.College}
                <br /> <br />
                :التخصص
                <br />
                {SupervisorInfo.Department}
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
