import React, {useContext}from "react";
import HeaderTrainingBody from "../HeaderTrainingBody";
import GuideNav from "../GuideNav";
import WebsiteFooter from "../../general/WebsiteFooter";
import "../PageContents.css";
import  TrainingBodyContex  from "../../../contex/TrainingBodyContex";


const Profile = () => {
  const {TrainingBodyInfo} =useContext(TrainingBodyContex)

  const supervisor = " لا يوجد ";
  const CurrentTraining = " لا يوجد ";
  return (
    <div>
      <HeaderTrainingBody />
      <div className="main-div">
        <div>
          <div className="info-box">
            <div className="user-info">
              <p className="p-info">
              </p>
            </div>
            <div className="user-info">
              <p className="p-info">
                :الاسم
                <br />
                {TrainingBodyInfo.Fullname}
                <br />
                <br />
                :اسم المستخدم
                <br />
                {TrainingBodyInfo.UserName}
                <br />
                <br />
                :البريد الاكتروني
                <br />
                {TrainingBodyInfo.Email}
                <br />
                <br />
                :رقم الجوال 
                <br />
                {TrainingBodyInfo.Phone_num}
                <br /> <br />
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
