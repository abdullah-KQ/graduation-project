import React from "react";
import { useState, useContext, useEffect } from "react";
import "../../PageContents.css";
import "./SuperviseStudents.css";
import axios from "../../../../api/axios";

const url_Students = "user/";

const StudentsCard = ({ card }) => {
  const [info, setinfo] = useState(true);

  const SuperviseStudents = async (e) => {
    try {
      const response = await axios.get(url_Students + card.UserName, {});
      setinfo(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    SuperviseStudents();
  }, []);

  return (
    <div className="Students-Card">
      <p className="p-Students-Card">
        {" اسم الطالب : " + info.Fullname}
        <br />
        <br />
        {info.UserName + " : اسم المستخدم "}
        <br />
        <br />
        {info.Email + " : البريد الاكتروني  "}
      </p>
    </div>
  );
};

export default StudentsCard;
