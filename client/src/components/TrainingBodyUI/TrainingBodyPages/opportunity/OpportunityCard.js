import React,{useContext} from "react";
import "./opportunity.css";
import OppInfoContex from "../../../../contex/OppInfo";
import { useNavigate } from "react-router-dom";

const StudentsCard = ({ card }) => {

  const {setOppInfo} =useContext(OppInfoContex)
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setOppInfo({
      Id: card.TrainingBody,
      Opport_name: card.Opport_name,
      Description: card.Description,
      Training_tasks: card.Training_tasks,
      Gender: card.Gender,
      Loaction: card.Loaction,
      Contact_Person: card.Position,
      Position: card.Position,
      vacancies: card.vacancies,
      StartDate: card.StartDate,
      FinishDate: card.FinishDate,
    })
    navigate("./OpportunityDetails");
  };

  return (
    <div className="Students-Card">
      <button className="button-Add-Opp" onClick={handleClick}>
      للمزيد من المعلومات
      </button>
      <p className="p-Students-Card">
      : اسم الفرصة  
       <br />
      {card.Opport_name}
        <br />
        <br />
         : وصف التدريب
        <br />
        {card.Description}
        <br />
        <br />
      </p>

    </div>
  );
};

export default StudentsCard;
