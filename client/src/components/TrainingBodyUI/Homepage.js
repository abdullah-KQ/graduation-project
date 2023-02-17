import React from 'react'
import { Routes, Route } from "react-router-dom";
import HeaderTrainingBody from './HeaderTrainingBody'
import WebsiteFooter from '../general/WebsiteFooter'
import PageContents from './PageContents'
import Profile from './TrainingBodyPages/Profile'
import AddTrainingOpp from './TrainingBodyPages/AddTrainingOpp/AddTrainingOpp';
import Opportunity from './TrainingBodyPages/opportunity/Opportunity';
import OpportunityDetails from './TrainingBodyPages/opportunity/OpportunityDetails';
import FillForms from './TrainingBodyPages/FillForms/FillForms';
import SignOut from "./TrainingBodyPages/SignOut/SignOut"

const Homepage = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <>
              <HeaderTrainingBody />
              <PageContents />
              <WebsiteFooter />
            </>
          }
        />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AddTrainingOpp" element={<AddTrainingOpp />} />
        <Route path="/opportunity" element={<Opportunity />} />
        <Route path="/opportunity/OpportunityDetails/" element={<OpportunityDetails />}/>
        <Route path="/FillForms/*" element={<FillForms />} />
        <Route path="/SignOut" element={<SignOut />} />

      </Routes>
    </>
  );
};

export default Homepage;