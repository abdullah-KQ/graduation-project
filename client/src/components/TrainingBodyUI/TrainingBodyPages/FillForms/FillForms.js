import React, {useEffect, useState, useContext } from 'react'
import { Routes, Route } from "react-router-dom";
import HeaderTrainingBody from '../../HeaderTrainingBody';
import GuideNav from "../../GuideNav";
import WebsiteFooter from "../../../general/WebsiteFooter";
import "./FillForms.css"
import TrainingBodyContex from '../../../../contex/TrainingBodyContex';
import axios from '../../../../api/axios';
import StudentsCard from './StudentsCard';
import FormPage from './FormPage';

const URL_AddOpportunity = "AddOpportunity/";
const URL_Students = "student/";

const FillForms = () => {

  const { TrainingBodyInfo } = useContext(TrainingBodyContex);

  const [card, setCard] = useState([]);
  const [card2, setCard2] = useState([]);
  let content;


  const getData = async () => {
    try {
      const response = await axios.get(URL_AddOpportunity, {});

      const response2 = await axios.get(URL_Students, {});

      const Data = response.data.filter(
        (Data) => Data.TrainingBody == TrainingBodyInfo.Id
      );
      Data.map((Data) => {
        response2.data.map((student) => {
          if (student.id == Data.student) {
            if (!card.includes(student)) {
              setCard2((prevState) => [...prevState, student]);
            }
          }
        });
      });


    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const newcard = Array.from(new Set(card2.map((a) => a.id))).map((id) => {
      return card2.find((a) => a.id === id);
    });
    setCard(newcard);
  }, [card2]);

  if(card.length > 0){

    const resulte = card.map(card =><StudentsCard key={card.UserName} card={card}/>)

     content = resulte?.length ? resulte : <p className="p-Students-Card"> لا يوجد طلاب تحت اشرافك  </p>

  }else{
    if(card.length == 0){
      content = <p className="p-Students-Card"> لا يوجد طلاب تحت اشرافك  </p> 
    }else{
    const resulte =<StudentsCard key={card.UserName} card={card}/>
    
    content = resulte;
    }
  }


  return (
    <>
      <Routes>
        <Route
          path=""
          element={
    <div>      
    <HeaderTrainingBody />
    <div className="main-div">
      <div className="Fill-Forms-box">
      {content}
      </div>
    <GuideNav />
    </div>
    <WebsiteFooter />
    </div>
    }
    />
        <Route path="/Forms/" element={<FormPage />} />
      </Routes>
    </>
  )
}

export default FillForms