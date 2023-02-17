import React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "../../../../api/axios";
import { useNavigate } from "react-router-dom";
import StudentContex from "../../../../contex/StudentContex"

const url_user = "user/";
const url_student = "student/";

const StudentsCard = ({ card }) => {
  const [info, setinfo] = useState(true);
  const [studentinfo, setstudentinfo] = useState(true);
  const navigate = useNavigate();

  const {setStudentInfo} =useContext(StudentContex)
  

  const SuperviseStudents = async (e) => {
    try {
      const response = await axios.get(url_student + card.id, {});
      setstudentinfo(response.data);
      const response2 = await axios.get(url_user + response.data.UserName, {});
      setinfo(response2.data);
      
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    SuperviseStudents();
  }, []);

  const isYes = ()=> {
    if(card.recommend == "Yes"){
      return<p className="p-Students-Card"> نعم </p>
    }else{
      return<p className="p-Students-Card"> لا </p>
    }

}

  return (
    <div className="Students-R-Card">
      <p className="p-Students-Card">
        "التقيم من 1 "الادنى" الى 5 "الاعلى   
        <br />
        <br />
        <br />
        انصح بتدريب لهاذة للجهة التدريبية ؟
        <br />
        {isYes()}
        <br />
        : هل تم اتباع الخطة التدريبية
       <br />
       {card.FollowingPlan}
       <br />
       <br />
      </p>
      <p className="p-Students-Card">
      : اسم الطالب  
       <br />
        { info.Fullname}
        <br />
        <br />
        : مدى جدية التدريب 
       <br />
       {card.SeriousTraining}
       <br />
       <br />
       : مدى الاستفادة من التدريب 
       <br />
       {card.ExperienceProvided}
       <br />
       <br />
      </p>
    </div>
  );
};

export default StudentsCard;
