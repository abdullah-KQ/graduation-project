import React, {useState, useEffect} from "react";
import axios from "../../../../api/axios";
import "./opportunity.css"

const URL_AddOpportunity = "AddOpportunity/";
const URL_user = "user/";
const URL_student = "student/";

const ApplyCard = ({ apply }) => {
    const [success, setsuccess] = useState(true)
    const [student, setStudent] = useState({});

    const handleClick = async (e) => {

        e.preventDefault();
        try {
            await axios.put(URL_AddOpportunity+ apply.id +"/", {
            id: apply.id,
            TrainingBody: apply.TrainingBody,
            Opportunity: apply.Opportunity,
            Supervisor: apply.Supervisor,
            student: apply.student,
            IsItAccepted: "true",
            });
            setsuccess(false)
          } catch (err) {
            console.log(err.response);
          }
        
      };
    
      const getData = async (e) => {
        try {
          const response = await axios.get(URL_student+apply.student, {});
          const response2 = await axios.get(URL_user+response.data.UserName, {});
          setStudent(response2.data)
          
        } catch (err) {
          console.log(err.response);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);

    const isAdded = ()=> {
        if(success){
        return( 
            <button className="button-Apply-Students" onClick={handleClick}>
            الموافقة على الطالب
          </button>
        )
      }else{
        return <p className="p-isAdded"> تمت الموافقة على الطلب </p>
      }
    }
  return (
    <div className="Apply-Students-Card">
        {isAdded()}
      <p className="p-Apply-Students-Card">
        : اسم الطالب
        <br />
        {student.Fullname}
        <br />
        <br />
        : البريد الاكتروني
        <br />
        {student.Email}
        <br />
        <br />
      </p>
    </div>
  );
};

export default ApplyCard;
