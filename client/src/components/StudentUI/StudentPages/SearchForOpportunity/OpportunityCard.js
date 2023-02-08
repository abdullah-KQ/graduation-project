import React, {useState, useContext} from "react";
import "../../PageContents.css";
import "./SearchForOpportunity.css";
import { useNavigate } from "react-router-dom";
import OpportunityDetails from "./OpportunityDetails";
import OppInfoContex from "../../../../contex/OppInfo";

const Opportunity = ({ card }) => {
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
    <>
      <div className="Opp-Card">
        <button className="button-Add-Opp" onClick={handleClick}>
          للمزيد من المعلومات{" "}
        </button>
        <p className="p-Opp-Card">
          {card.Opport_name + " : الفرصة التدريبة "}
          <br />
          <br />
          {card.Description + " : الوصف "}
        </p>
      </div>

    </>
  );
};

export default Opportunity;
