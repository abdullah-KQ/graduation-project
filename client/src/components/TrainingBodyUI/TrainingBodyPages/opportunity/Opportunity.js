import React, {useContext, useState, useEffect} from "react";
import HeaderTrainingBody from "../../HeaderTrainingBody";
import GuideNav from "../../GuideNav";
import WebsiteFooter from "../../../general/WebsiteFooter";
import ListCards from "./ListCards";
import TrainingBodyContex from "../../../../contex/TrainingBodyContex";
import axios from "../../../../api/axios";
import "./opportunity.css";

const URL_Opportunity = "Opportunity/";

const Opportunity = () => {
    const [card, setCard] = useState([]);
    const { TrainingBodyInfo } = useContext(TrainingBodyContex);

    const getData = async (e) => {
        try {
          const response = await axios.get(URL_Opportunity, {});
          const Data = response.data.filter(
            (Opportunity) => Opportunity.TrainingBody == TrainingBodyInfo.Id
          );
          setCard(Data)
  
        } catch (err) {
          console.log(err.response);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);

  return (
    <div>
      <HeaderTrainingBody />
      <div className="main-div">
        <div className="Opp-box">
        <ListCards card={card} />
        </div>

        <GuideNav />
      </div>
      <WebsiteFooter />
    </div>
  );
};

export default Opportunity;
