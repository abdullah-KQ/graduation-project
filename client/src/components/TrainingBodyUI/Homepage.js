import React from 'react'
import { Routes, Route } from "react-router-dom";
import HeaderTrainingBody from './HeaderTrainingBody'
import WebsiteFooter from '../general/WebsiteFooter'
import PageContents from './PageContents'
import Profile from './TrainingBodyPages/Profile'
import AddTrainingOpp from './TrainingBodyPages/AddTrainingOpp/AddTrainingOpp';

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
      </Routes>
    </>
  );
};

export default Homepage;