import React,{useContext} from 'react'
import "./PageContents.css"
import { Link } from "react-router-dom";
import GuideNav from './GuideNav';
import TrainingBodyContex from "../../contex/TrainingBodyContex";


const PageContents = () => {
  const {TrainingBodyInfo} =useContext(TrainingBodyContex)

  const supervisor = " لا يوجد ";
  const form = " لا توجد ";

  return (
    <div className="main-div">
      <div>
        <div className="info-box">
          <div className="user-info">
            <p className="p-info">
              : المشرفين المنتسبين 
              <br />
              {supervisor}
              <br />
              <br />
              <Link to={"./AddSupervisor"}>
              <button className="user-info-button"> للمزيد عن معلومات المشرفين </button>
              </Link>
              <br />
              <br />
            </p>
            <p className="p-info">
              :فرص التدريب
              <br />
              لا يتوجد فرص تدريب
              <br />
              <br />
              <Link to={"./CurrentTraining"}>
              <button className="user-info-button"> للمزيد عن فرص التدريب </button>
              </Link>
            </p>
          </div>
          <div className="user-info">
            <p className="p-info">
              :الاسم
              <br />
              {TrainingBodyInfo.Fullname}
              <br /><br />
              : البريد الاكتروني
              <br />
              {TrainingBodyInfo.Email}
              <br />
            </p>
            <Link to={"./Profile"}>
            <button className="user-info-button">
              للمزيد عن الملف الشخصي
            </button>
            </Link>
            <p className="p-info">
              <br />
              :النماذج المطلوب تعبئتها
              <br />
              {form}
              <br />
            </p>
            <Link to={"./FillForms"}>
            <button className="user-info-button"> لتعبئة النماذج </button>
            </Link>
          </div>
        </div>
      </div>
      <GuideNav />
    </div>
  );
};

export default PageContents;