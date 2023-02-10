import React from "react";
import { useState, useContext, useEffect } from "react";
import "../../PageContents.css";
import "./Forms.css";
import axios from "../../../../api/axios";
import { useNavigate } from "react-router-dom";
import StudentContex from "../../../../contex/StudentContex"

const url_Students = "user/";

const StudentsCard = ({ card }) => {
  const [info, setinfo] = useState(true);
  const navigate = useNavigate();

  const {setStudentInfo} =useContext(StudentContex)
  

  const SuperviseStudents = async (e) => {
    try {
      const response = await axios.get(url_Students + card.UserName, {});
      setinfo(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setStudentInfo({
      Id: 0,
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
      ارسال طلب لتعبئة نموذج
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
