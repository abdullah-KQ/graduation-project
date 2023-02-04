import React from 'react'
import { useState, useEffect, useContext } from "react";
import HeaderSupervisor from "../../HeaderSupervisor";
import GuideNav from "../../GuideNav";
import WebsiteFooter from "../../../general/WebsiteFooter";
import "./SuperviseStudents.css"
import ListCards from "./ListCards";
import axios from "../../../../api/axios";
import SupervisorContex from '../../../../contex/SupervisorContex';


const URL_SuperviseStudents = "SuperviseStudents/";
const URL_Students = "student/";


const SuperviseStudents = () => {
    const [card, setCard] = useState([]);
    const {SupervisorInfo} =useContext(SupervisorContex)
  
    const getData = async (e) => {
      try {
        const response = await axios.get(URL_SuperviseStudents, {});
        const Data = response.data.filter((Supervise) => Supervise.Supervisor == SupervisorInfo.Id);

        const response2 = await axios.get(URL_Students, {});

        if(response2.id == Data.student){
            Object.entries(response2.data);
            setCard(response2.data);
        }
      } catch (err) {
        console.log(err.response);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);


    

  return (
    <div>
    <HeaderSupervisor />
      <div className="main-div">
        <div className="SuperviseStudents-box">
        <ListCards card={card} />
        </div>
        <GuideNav />
      </div>
      <WebsiteFooter />  
    </div>
  )
}

export default SuperviseStudents