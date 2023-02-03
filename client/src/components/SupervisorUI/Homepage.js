import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderSupervisor from "./HeaderSupervisor";
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
              <HeaderSupervisor />
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
