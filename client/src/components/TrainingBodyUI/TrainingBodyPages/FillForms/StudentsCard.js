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
      const response = await axios.get(url_user + card.UserName, {});
      setinfo(response.data);
      const response2 = await axios.get(url_student + card.UserName+"/", {});
      setstudentinfo(response2.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setStudentInfo({
      Id: studentinfo.id,
      UserName: info.UserName,
      Fullname: info.Fullname,
      Phone_num: info.Phone_num,
      Email: info.Email,
      Role: "",
      Uni_id: "",
      Department: "",
      College: "",
    })
    navigate("./Forms/");
  };
  useEffect(() => {
    SuperviseStudents();
  }, []);

  return (
    <div className="Students-Card">
      <button className="button-Info-Students" onClick={handleClick}>
      لتعبئة نموذج
      </button>
      <p className="p-Students-Card">
      : اسم الطالب  
       <br />
        { info.Fullname}
        <br />
        <br />
         : البريد الاكتروني  
        <br />
        {info.Email}
      </p>
    </div>
  );
};

export default StudentsCard;
