import React,{useContext} from 'react'
import "./PageContents.css"
import { Link } from "react-router-dom";
import GuideNav from './GuideNav';
import SupervisorContex from "../../contex/SupervisorContex";


const PageContents = () => {
  const {SupervisorInfo} =useContext(SupervisorContex)
  const form = " لا توجد ";

  const isVerified = ()=>{
    if(SupervisorInfo.Verified== "true"){
    return <span>الحساب موثق</span>
  }else{
    return <span>الحساب غير موثق</span>
  }
}

  return (
    <div className="main-div">
      <div>
        <div className="info-box">
          <div className="user-info">
            <p className="p-info">
              :الحساب موثق 
              <br />
              {isVerified()}
              <br />
              <br />
              <Link to={"./VerifiedSupervisor"}>
              <button className="user-info-button"> للمزيد عن توثيق الحساب </button>
              </Link>
              <br />
              <br />
            </p>
            <p className="p-info">
              :الطلاب تحت الإشراف
              <br />
              لا يوجد طلاب تحت اشرافك
                            <br />
              <br />
              <Link to={"./CurrentTraining"}>
              <button className="user-info-button"> للمزيد عن الطلاب </button>
              </Link>
            </p>
          </div>
          <div className="user-info">
            <p className="p-info">
              :الاسم
              <br />
              {SupervisorInfo.Fullname}
              <br /><br />
              :التخصص
              <br />
              {SupervisorInfo.Department}
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