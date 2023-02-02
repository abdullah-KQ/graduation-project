import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderStudent from "../StudentUI/HeaderStudent";
import WebsiteFooter from "../general/WebsiteFooter";
import PageContents from "./PageContents";
import Profile from "./SupervisorUIPages/Profile";

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
              <WebsiteFooter />
            </>
          }
        />
        <Route path="/Profile/" element={<Profile />} />
      </Routes>
    </>
  );
};

export default Homepage;
