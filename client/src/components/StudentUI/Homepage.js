import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderStudent from "./HeaderStudent";
import WebsiteFooter from "../general/WebsiteFooter";
import PageContents from "./PageContents";
import ViewTrainingOpportunities from "../Homepage/ViewTrainingOpportunities";
import Profile from "./StudentPages/Profile"
import AddSupervisor from "./StudentPages/AddSupervisor"
import SearchForOpportunity from "./StudentPages/SearchForOpportunity";
import CurrentTraining from "./StudentPages/CurrentTraining"
import FillForms from "./StudentPages/FillForms"
import EvaluateOpportunity from "./StudentPages/EvaluateOpportunity"
import SignOut from "./StudentPages/SignOut"


const Homepage = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <>
              <HeaderStudent />
              <PageContents />
              <ViewTrainingOpportunities />
              <WebsiteFooter />
            </>
          }
        />
        <Route path="/Profile/" element={<Profile />} />
        <Route path="/AddSupervisor/" element={<AddSupervisor />} />
        <Route path="/SearchForOpp/" element={<SearchForOpportunity />} />
        <Route path="/CurrentTraining/" element={<CurrentTraining />} />
        <Route path="/FillForms/" element={<FillForms />} />
        <Route path="/EvaluateOpportunity/" element={<EvaluateOpportunity />} />
        <Route path="/SignOut/" element={<SignOut />} />
      </Routes>
    </>
  );
};

export default Homepage;
