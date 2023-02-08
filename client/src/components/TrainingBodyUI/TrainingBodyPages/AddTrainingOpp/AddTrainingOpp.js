import React from "react";
import { useContext, useState, useEffect } from "react";
import HeaderTrainingBody from "../../HeaderTrainingBody";
import GuideNav from "../../GuideNav";
import WebsiteFooter from "../../../general/WebsiteFooter";
import "../PageContents.css";
import FieldrFormInput from "./FieldrFormInput";
import FieldrFormTextarea from "./FieldrFormTextarea ";
import "./AddTrainingOpp.css";
import axios from "../../../../api/axios" 
import TrainingBodyContex from "../../../../contex/TrainingBodyContex";

const Opportunity_URL = "Opportunity/";

const AddTrainingOpp = () => {
  const [OpportName, setOpportName] = useState("");
  const [Description, setDescription] = useState("");
  const [TrainingTasks, setTrainingTasks] = useState("");
  const [Gender, setGender] = useState("");
  const [validGender, setvalidGender] = useState(false);
  const [Loaction, setLoaction] = useState("");
  const [vacancies, setVacancies] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [FinishDate, setFinishDate] = useState("");
  const [ContactPerson, setContactPerson] = useState("");
  const [Position, setPosition] = useState("");

  const [errMag, setErrMag] = useState("");
  const [success, setsuccess] = useState(true)
  
  const {TrainingBodyInfo} =useContext(TrainingBodyContex)
  
  
  useEffect(() => {
    if (Gender === "choose") {
      setvalidGender(false);
    } else {
      setvalidGender(true);
    }
  }, [Gender]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(Opportunity_URL, {
        TrainingBody:TrainingBodyInfo.Id,
        Opport_name:OpportName,
        Description:Description,
        Training_tasks:TrainingTasks,
        Gender:Gender,
        Loaction:Loaction,
        vacancies:vacancies,
        StartDate:StartDate,
        FinishDate:FinishDate,
        Contact_Person:ContactPerson,
        Position:Position,

      });
      console.log(response);
      setsuccess(false)
  }catch (err) {
    if (!err?.response) {
      setErrMag("No Server Response");
    } else {
      setErrMag("Registration Failed");
    }
  }
}

const isAdded = ()=> {
  if(success){
  return( <button className="submit_button" 
  disabled={!validGender}
  >
  نشر اعلان التدريب
</button>)
}else{
  return <p className="p-isAdded"> تمت نشر الاعلان </p>
}
}
  
  

  return (
    <div>
      <HeaderTrainingBody />
      <div className="main-div">
        <div className="Opport-box">
          <form className="Opport-form" onSubmit={handleSubmit}>
            <FieldrFormInput
              label_name="اسم الفرصة التدريبية "
              ID="OpportName"
              label_class="label-OpportName"
              type="text"
              input_class="OpportName"
              placeholder=" ادخل اسم الفرصة التدريبية  "
              set={setOpportName}
            />

            <FieldrFormTextarea
              label_name=" وصف للفرصة التدريبية  "
              ID="Description"
              label_class="label-Description"
              type="textarea"
              input_class="Description"
              placeholder=" ادخل وصف للفرصة التدريبية  "
              set={setDescription}
            />

            <FieldrFormTextarea
              label_name=" المهام المطلوبة من الطالب "
              ID="TrainingTasks"
              label_class="label-TrainingTasks"
              type="text"
              input_class="TrainingTasks"
              placeholder=" ادخل المهام المطلوبة من الطالب "
              set={setTrainingTasks}
            />

            <label htmlFor="Gender" className="label-Gender">
              : نوع الجنس المستهدف
            </label>
            <select
              id="Gender"
              className="Gender"
              required
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="choose"> -- اختر الجنس -- </option>
              <option value="male">للذكر</option>
              <option value="female">للانثى</option>
              <option value="both">للذكر والانثى</option>
            </select>

              <FieldrFormInput
              label_name=" موقع مركز جهة التدريب "
              ID="Loaction"
              label_class="label-Loaction"
              type="text"
              input_class="Loaction"
              placeholder="  مثال : المدينة المنورة مركز الهجرة  "
              set={setLoaction}
            />

              <FieldrFormInput
              label_name=" عدد المقاعد المتاحة للتدريب "
              ID="vacancies"
              label_class="label-vacancies"
              type="text"
              input_class="vacancies"
              placeholder=" ادخل عدد المقاعد المتاحة للتدريب  "
              set={setVacancies}
            />

              <FieldrFormInput
              label_name=" تاريخ بدء التدريب "
              ID="StartDate"
              label_class="label-StartDate"
              type="date"
              input_class="StartDate"
              placeholder=""
              set={setStartDate}
            />

            <FieldrFormInput
              label_name=" تاريخ انتهاء التدريب "
              ID="FinishDate"
              label_class="label-FinishDate"
              type="date"
              input_class="FinishDate"
              placeholder=""
              set={setFinishDate}
            />

            <FieldrFormInput
              label_name=" (من جهة التدريب) اسم المشرف على التدريب  "
              ID="ContactPerson"
              label_class="label-ContactPerson"
              type="text"
              input_class="ContactPerson"
              placeholder=" ادخل اسم المشرف على التدريب "
              set={setContactPerson}
            />

            <FieldrFormInput
              label_name=" منصب المشرف في جهة التدريب "
              ID="Position"
              label_class="label-Position"
              type="text"
              input_class="Position"
              placeholder=" ادخل منصب المشرف  "
              set={setPosition}
            />
              {errMag}
              {isAdded()}
          </form>
        </div>
        <GuideNav />
      </div>
      <WebsiteFooter />
    </div>
  );
};

export default AddTrainingOpp;
