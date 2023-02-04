import React from 'react';
import { useState, useContext } from "react";
import "../../PageContents.css";
import "./AddSuperviseStudents.css";
import axios from '../../../../api/axios';
import SupervisorContex from '../../../../contex/SupervisorContex';

const url ="SuperviseStudents/"
const url_Students ="student/"

const StudentsCard = ({ card }) => {
  const [success, setsuccess] = useState(true)
  const {SupervisorInfo} =useContext(SupervisorContex)

  

  const SuperviseStudents = async (e) => {
      try {
        const response = await axios.get(url_Students + card.UserName+"/", {});
        const Data = response.data
      console.log(SupervisorInfo.Id)
      console.log(Data.id)
      const response2 = await axios.post(url, {
        Supervisor:SupervisorInfo.Id,
        student:Data.id
      });
      console.log(response2)
      setsuccess(true)
    } catch (err) {
      console.log(err.response);
    }

    setsuccess(false)
  };

  const isAdded = ()=> {
    if(success){
    return( <button className="button-Add-Students" onClick={SuperviseStudents}>
       الاشراف على الطالب 
       </button>)
  }else{
    return <p className="p-isAdded"> تمت اضافة الطالب بنجاح </p>
  }
  }


  return (
<div className="Students-Card">
  {isAdded()}
<p className="p-Students-Card">
{" اسم الطالب : "+card.Fullname}  
<br />
<br />
   {card.UserName+" : اسم المستخدم "}
<br />
<br />
    {card.Email+" : البريد الاكتروني  "} 
</p>
</div>

  )
}

export default StudentsCard