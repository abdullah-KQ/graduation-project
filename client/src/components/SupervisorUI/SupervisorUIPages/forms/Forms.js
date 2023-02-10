import React from "react";
import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderSupervisor from "../../HeaderSupervisor";
import GuideNav from "../../GuideNav";
import WebsiteFooter from "../../../general/WebsiteFooter";
import "./Forms.css";
import ListCards from "./ListCards";
import axios from "../../../../api/axios";
import SupervisorContex from "../../../../contex/SupervisorContex";
import MainPageForm from "./FormsPages/MainPageForm";
import Form1 from "./FormsPages/Form1";

const URL_SuperviseStudents = "SuperviseStudents/";
const URL_Students = "student/";

const Forms = () => {
  const [card, setCard] = useState([]);
  const [card2, setCard2] = useState([]);
  const { SupervisorInfo } = useContext(SupervisorContex);

  const getData = async (e) => {
    try {
      const response = await axios.get(URL_SuperviseStudents, {});
      const Data = response.data.filter(
        (Supervise) => Supervise.Supervisor == SupervisorInfo.Id
      );

      const response2 = await axios.get(URL_Students, {});
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

  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <div>
              <HeaderSupervisor />
              <div className="main-div">
                <div className="Form-box">
                  <ListCards card={card} />
                </div>
                <GuideNav />
              </div>
              <WebsiteFooter />
            </div>
          }
        />
        <Route path="/Forms/" element={<MainPageForm />} />
        <Route path="/Forms/Form1" element={<Form1 />} />
      </Routes>
    </>
  );
};

export default Forms;
