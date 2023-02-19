import React, { useContext, useEffect, useState } from "react";
import HeaderSupervisor from "../../../HeaderSupervisor";
import GuideNav from "./GuideNav";
import WebsiteFooter from "../../../../general/WebsiteFooter";
import StudentContex from "../../../../../contex/StudentContex";
import SupervisorContex from "../../../../../contex/SupervisorContex";
import axios from "../../../../../api/axios";
import "../Forms.css";

const URL_Students = "student/";
const URL_TrainingBody = "TrainingBody/";
const URL_AddOpportunity = "AddOpportunity/";
const URL_user = "user/";

const MainPageForm = () => {
  const { StudentInfo } = useContext(StudentContex);
  const { SupervisorInfo } = useContext(SupervisorContex);
  const [Students, setStudents] = useState("");
  const [TrainingBody, setTrainingBody] = useState("");
  const [TrainingBodyInf, setTrainingBodyInf] = useState("");


  const [success2, setsuccess2] = useState(true)
  const [success4, setsuccess4] = useState(true)
  const [success5, setsuccess5] = useState(true)
  const [success6, setsuccess6] = useState(true)
  const [success7, setsuccess7] = useState(true)
  const [success9, setsuccess9] = useState(true)
  

  let url_form1 = "http://127.0.0.1:8000/form1/" + StudentInfo.UserName;
  let url_form2 = "http://127.0.0.1:8000/form2/" + StudentInfo.UserName;
  let url_form3 = "http://127.0.0.1:8000/form3/" + StudentInfo.UserName;
  let url_form4 = "http://127.0.0.1:8000/form4/" + StudentInfo.UserName;
  let url_form5 = "http://127.0.0.1:8000/form5/" + StudentInfo.UserName;
  let url_form6 = "http://127.0.0.1:8000/form6/" + StudentInfo.UserName;
  let url_form7 = "http://127.0.0.1:8000/form7/" + StudentInfo.UserName;
  let url_form8 = "http://127.0.0.1:8000/form8/" + StudentInfo.UserName;
  let url_form9 = "http://127.0.0.1:8000/form9/" + StudentInfo.UserName;

  const getData = async (e) => {
    try {
      const response = await axios.get(URL_Students + StudentInfo.UserName + "/",{});
      setStudents(response.data);
      const response2 = await axios.get(URL_AddOpportunity + response.data.id,{});

      const response3 = await axios.get(URL_TrainingBody + response2.data.TrainingBody,{});
      setTrainingBody(response3.data);

      const response4 = await axios.get(URL_user + response3.data.UserName,{});
      setTrainingBodyInf(response4.data);

    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClickSendForm2 = async (e) => {
    e.preventDefault();
    try {
      await axios.post("form2/",{
        student : Students.id,
        AcademicYear : "incomplete",
        Semester: "incomplete",
        Major: "incomplete",
        CGPA: "incomplete",
        HoursEarned: "incomplete",
        HoursRegistered: "incomplete",
        HoursRemaining: "incomplete",
        descriptionAboutCompany: "incomplete",
        IsItCompleted: "false"
      });
      setsuccess2(false)
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleClickSendForm4 = async (e) => {
    e.preventDefault();
    await axios.post("form4/",{
      TrainingBody : TrainingBody.id,
      student : Students.id,
      AttendanceAccuracy : "?",
      GeneralAppearance: "?",
      Enthusiasm: "?",
      AbilityToAnalyze: "?",
      AccuracyOutput: "?",
      AbilityPresent: "?",
      AbilityReport: "?",
      RelationshipTrainer: "?",
      RelationshipCoWorkers: "?",
      Flexibility: "?",
      AbilityLearn: "?",
      AbilityDecision: "?",
      GeneralPerformance: "?",
      Strengths: "incomplete",
      Weaknesses: "incomplete",
      AreTraineeSkills: "incomplete",
      Comments: "incomplete",
      IsItCompleted: "false"
    });
    setsuccess4(false)
    try {
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleClickSendForm5 = async (e) => {
    e.preventDefault();
    await axios.post("form5/",{
      TrainingBody : TrainingBody.id,
      student : Students.id,
      AttendanceAccuracy : "?",
      GeneralAppearance: "?",
      Enthusiasm: "?",
      AbilityToAnalyze: "?",
      AccuracyOutput: "?",
      AbilityPresent: "?",
      AbilityReport: "?",
      RelationshipTrainer: "?",
      RelationshipCoWorkers: "?",
      Flexibility: "?",
      AbilityLearn: "?",
      AbilityDecision: "?",
      GeneralPerformance: "?",
      Strengths: "incomplete",
      Weaknesses: "incomplete",
      AreTraineeSkills: "incomplete",
      Comments: "incomplete",
      IsItCompleted: "false"
    });
    setsuccess5(false)
    try {
    } catch (err) {
      console.log(err.response);
    }
  };
  const handleClickSendForm6 = async (e) => {
    e.preventDefault();
    await axios.post("form6/",{
      Supervisor : SupervisorInfo.Id,
      Course : "incomplete",
      Term: "incomplete",
      PunctualityFrist: "?",
      QualityFrist: "?",
      PunctualityFinal: "?",
      QualityFinal: "?",
      IsItCompleted: "false"
    });
    setsuccess6(false)
    try {
    } catch (err) {
      console.log(err.response);
    }
  };
  const handleClickSendForm7 = async (e) => {
    e.preventDefault();
    await axios.post("form7/",{
      student : Students.id,
      SeriousTraining : "incomplete",
      ExperienceProvided: "incomplete",
      SuitableTrainingPlace: "?",
      SeriousTrainer: "?",
      TimeGivenTraining: "?",
      ExperienceTrainer: "?",
      HelpWorkingStaff: "?",
      FollowingPlan: "?",
      AdvantagesProgram: "?",
      TheCompatibility: "?",
      benefits: "incomplete",
      problems: "incomplete",
      expectations: "incomplete",
      suggestions: "incomplete",
      recommend: "?",
      IsItCompleted: "false"
    });
    setsuccess7(false)
    try {
    } catch (err) {
      console.log(err.response);
    }
  };
  const handleClickSendForm9 = async (e) => {
    e.preventDefault();
    await axios.post("form9/",{
      TrainingBody : TrainingBody.id,
      student : Students.id,
      WeekNo : "incomplete",
      StudentAttendenceSunday: "incomplete",
      StudentAttendenceMonday: "incomplete",
      StudentAttendenceTuesday: "incomplete",
      StudentAttendenceWednesday: "incomplete",
      StudentAttendenceThursday: "incomplete",
      TasksThisWeek: "incomplete",
      SoftwarUsedThisWeek: "incomplete",
      IsItCompleted: "false"
    });
    setsuccess9(false)
    try {
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleClickShowForm1 = (e) => {
    e.preventDefault();
    window.open(url_form1, "_blank");
  };

  const handleClickShowForm2 = (e) => {
    e.preventDefault();
    window.open(url_form2, "_blank");
  };

  const handleClickShowForm3 = (e) => {
    e.preventDefault();
    window.open(url_form3, "_blank");
  };

  const handleClickShowForm4 = (e) => {
    e.preventDefault();
    window.open(url_form4, "_blank");
  };

  const handleClickShowForm5 = (e) => {
    e.preventDefault();
    window.open(url_form5, "_blank");
  };

  const handleClickShowForm6 = (e) => {
    e.preventDefault();
    window.open(url_form6, "_blank");
  };

  const handleClickShowForm7 = (e) => {
    e.preventDefault();
    window.open(url_form7, "_blank");
  };

  const handleClickShowForm8 = (e) => {
    e.preventDefault();
    window.open(url_form8, "_blank");
  };

  const handleClickShowForm9 = (e) => {
    e.preventDefault();
    window.open(url_form9, "_blank");
  };

  const isSendForm2 = ()=> {
    if(success2){
    return(          
    <button className="button-form" onClick={handleClickSendForm2}>
      ارسال النموذج
    </button> )
  }else{
    return <p className="p-isSend"> تم ارسال النموذج بنجاج </p>
  }
  }

  const isSendForm4 = ()=> {
    if(success4){
    return(          
    <button className="button-form" onClick={handleClickSendForm4}>
      ارسال النموذج
    </button> )
  }else{
    return <p className="p-isSend"> تم ارسال النموذج بنجاج </p>
  }
  }

  const isSendForm5 = ()=> {
    if(success5){
    return(          
    <button className="button-form" onClick={handleClickSendForm5}>
      ارسال النموذج
    </button> )
  }else{
    return <p className="p-isSend"> تم ارسال النموذج بنجاج </p>
  }
  }

  const isSendForm6 = ()=> {
    if(success6){
    return(          
    <button className="button-form" onClick={handleClickSendForm6}>
      ارسال النموذج
    </button> )
  }else{
    return <p className="p-isSend"> تم ارسال النموذج بنجاج </p>
  }
  }

  const isSendForm7 = ()=> {
    if(success7){
    return(          
    <button className="button-form" onClick={handleClickSendForm7}>
      ارسال النموذج
    </button> )
  }else{
    return <p className="p-isSend"> تم ارسال النموذج بنجاج </p>
  }
  }

  const isSendForm9 = ()=> {
    if(success9){
    return(          
    <button className="button-form" onClick={handleClickSendForm9}>
      ارسال النموذج
    </button> )
  }else{
    return <p className="p-isSend"> تم ارسال النموذج بنجاج </p>
  }
  }


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
              : رقم مسؤول التدريب
              <br />
              {TrainingBodyInf.Phone_num}
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
              {TrainingBodyInf.Fullname}
              <br />
              <br />
            </p>
          </div>
          <div className="Students-Card">
            <button className="button-form" onClick={handleClickShowForm1}>
              عرض النموذج
            </button>

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
            {isSendForm2()}
            <button className="button-form" onClick={handleClickShowForm2}>
              عرض النموذج
            </button>

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
          <div className="Students-Card">
            <button className="button-form" onClick={handleClickShowForm3}>
              عرض النموذج
            </button>

            <p className="p-Students-Card">
              : النموذج الثالث
              <br />
              Trainee Regulation & Commitment
              <br />
              <br />
              : الحالة
              <br />
              غير مكتمل
            </p>
          </div>
          <div className="Students-Card">
          {isSendForm4()}
            <button className="button-form" onClick={handleClickShowForm4}>
              عرض النموذج
            </button>

            <p className="p-Students-Card">
              : النموذج الرابع
              <br />
              Trainer Evaluates Trainee - First Report
              <br />
              <br />
              : الحالة
              <br />
              غير مكتمل
            </p>
          </div>
          <div className="Students-Card">
          {isSendForm5()}
            <button className="button-form" onClick={handleClickShowForm5}>
              عرض النموذج
            </button>

            <p className="p-Students-Card">
              : النموذج الخامس
              <br />
              Trainer Evaluates Trainee - Final Report
              <br />
              <br />
              : الحالة
              <br />
              غير مكتمل
            </p>
          </div>
          <div className="Students-Card">
          {isSendForm6()}
            <button className="button-form" onClick={handleClickShowForm6}>
              عرض النموذج
            </button>

            <p className="p-Students-Card">
              : النموذج السادس
              <br />
              Academic Supervisor Evaluation Form
              <br />
              <br />
              : الحالة
              <br />
              غير مكتمل
            </p>
          </div>
          <div className="Students-Card">
          {isSendForm7()}
            <button className="button-form" onClick={handleClickShowForm7}>
              عرض النموذج
            </button>

            <p className="p-Students-Card">
              : النموذج السابع
              <br />
              Student Evaluation for the Trainig Progarm
              <br />
              <br />
              : الحالة
              <br />
              غير مكتمل
            </p>
          </div>
          <div className="Students-Card">
            <button className="button-form" onClick={handleClickShowForm8}>
              عرض النموذج
            </button>

            <p className="p-Students-Card">
              : النموذج الثامن
              <br />
              Complaint Form
              <br />
              <br />
              : الحالة
              <br />
              غير مكتمل
            </p>
          </div>
          <div className="Students-Card">
          {isSendForm9()}
            <button className="button-form" onClick={handleClickShowForm9}>
              عرض النموذج
            </button>

            <p className="p-Students-Card">
              : النموذج التاسع
              <br />
              Weekly Report Form
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
    </div>
  );
};

export default MainPageForm;
