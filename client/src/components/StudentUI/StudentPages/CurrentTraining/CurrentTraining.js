import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "../../../../api/axios";
import HeaderStudent from "../../HeaderStudent";
import GuideNav from "../../GuideNav";
import WebsiteFooter from "../../../general/WebsiteFooter";
import StudentContex from "../../../../contex/StudentContex";
import "./CurrentTraining.css";

const URL_AddOpportunity = "AddOpportunity/";
const URL_Opportunity = "Opportunity/";
const URL_TrainingBody = "TrainingBody/";
const URL_User = "user/";

const CurrentTraining = () => {
  const { StudentInfo } = useContext(StudentContex);

  const [Opportunity, setOpportunity] = useState("");
  const [trainingBody, setTrainingBody] = useState("");
  const [User, setUser] = useState("");
  const [Notification, setNotification] = useState();
  const [success, setsuccess] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(URL_AddOpportunity, {});
      const Data = response.data.filter(
        (Data) => Data.student == StudentInfo.Id
      );
      const Data2 = Data.filter((Data) => Data.IsItAccepted == "true");
      setNotification(Data2);
      const response2 = await axios.get(URL_Opportunity, {});
      const Data3 = response2.data.filter(
        (Data) => Data.id == Data2[0].Opportunity
      );
      setOpportunity(Data3);
      const response3 = await axios.get(URL_TrainingBody+Data3[0].TrainingBody, {});
      setTrainingBody(response3.data)
      const response4 = await axios.get(URL_User+response3.data.UserName, {});
      setUser(response4.data)
      if (Data2[0].notification == "false") {
        setsuccess(true);
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        URL_AddOpportunity + Notification[0].id + "/",
        {
          id: Notification[0].id,
          TrainingBody: Notification[0].TrainingBody,
          Opportunity: Notification[0].Opportunity,
          Supervisor: Notification[0].Supervisor,
          student: Notification[0].student,
          IsItAccepted: "true",
          notification: "true",
        }
      );
      console.log(response);
      setsuccess(false);
    } catch (err) {
      console.log(err.response);
    }
  };

  const isNotification = () => {
    if (success) {
      return (
        <div className="Notification-Students-Card">
          <button
            className="button-Notification-Students"
            onClick={handleClick}
          >
            موافق
          </button>
          <p className="p-Notification-Students-Card">
            : اسم الجهة التدريبية
            <br />
            {User.Fullname}
            <br />
            : اسم الفرصة
            <br />
            {Opportunity.Opport_name}
            <br />
            : البريد الاكتروني
            <br />
            {User.Email}
            <br />
            <br />
            الرجاء التواصل مع جهة التدريب عبر البريد الاكتروني لمعرفة المزيد من
            تفاصيل التدريب والمقابلة
            <br />
          </p>
        </div>
      );
    } else {
      return ;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (Opportunity[0]) {
    setOpportunity(Opportunity[0]);
  }

 

  return (
    <div>
      <HeaderStudent />
      <div className="main-div">
        <div>
          <div className="Opp-box">
            {isNotification()}
            <p className="p-Opp-box">
              <br />
              : اسم جهة التدريب
              <br />
              {User.Fullname}
              <br />
              <br />
              : اسم الفرصة التدريبية
              <br />
              {Opportunity.Opport_name}
              <br />
              <br />
              : وصف للفرصة التدريبية
              <br />
              {Opportunity.Description}
              <br />
              <br />
              : المهام المطلوبة من المتدريب
              <br />
              {Opportunity.Training_tasks}
              <br />
              <br />
              : التدريب للموجة
              <br />
              {Opportunity.Gender}
              <br />
              <br />
              : موقع التدريب
              <br />
              {Opportunity.Loaction}
              <br />
              <br />
              : اسم المسؤل عن التدريب من جهة التدريب
              <br />
              {Opportunity.Contact_Person}
              <br />
              <br />
              : منصبة في جهة التدريب
              <br />
              {Opportunity.Position}
              <br />
              <br />
              : المقاعد المتاحة للتدريب
              <br />
              {Opportunity.vacancies}
              <br />
              <br />
              : تاريخ بدء التدريب
              <br />
              {Opportunity.StartDate}
              <br />
              <br />
              : تاريخ انتهاء التدريب
              <br />
              {Opportunity.FinishDate}
              <br />
              <br />
            </p>
          </div>
        </div>
        <GuideNav />
      </div>
      <WebsiteFooter />
    </div>
  );
};

export default CurrentTraining;
