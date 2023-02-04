import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderSupervisor from "./HeaderSupervisor";
import WebsiteFooter from "../general/WebsiteFooter";
import PageContents from "./PageContents";
import Profile from "./SupervisorUIPages/Profile";
import VerifyAccount from "./SupervisorUIPages/VerifyAccount/VerifyAccount";
import AddSuperviseStudents from "./SupervisorUIPages/AddSuperviseStudents/AddSuperviseStudents";
import SuperviseStudents from "./SupervisorUIPages/SuperviseStudents/SuperviseStudents";
import SignOut from "./SupervisorUIPages/SignOut/SignOut";

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
        <Route path="/VerifyAccount/" element={<VerifyAccount />} />
        <Route path="/AddSuperviseStudents/" element={<AddSuperviseStudents />} />
        <Route path="/SuperviseStudents/" element={<SuperviseStudents />} />
        <Route path="/SignOut/" element={<SignOut />} />
      </Routes>
    </>
  );
};

export default Homepage;
