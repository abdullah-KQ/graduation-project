import React from "react";
//import axios from "axios";
import Header from "../general/Header.js";
import Introduction from "./Introduction.js";
import ViewTrainingOpportunities from "./ViewTrainingOpportunities.js";
import CommonQuestions from "./CommonQuestions.js";
import WebsiteFooter from "../general/WebsiteFooter.js";

function Homepage() {
  
    return (

      <>
        <Header />
        <Introduction />
        <CommonQuestions />
        <WebsiteFooter />
      </>
    );
  }


export default Homepage;
