import React from "react";
//import axios from "axios";
import Header from "../general/Header.js";
import Introduction from "./Introduction.js";
import ViewTrainingOpportunities from "./ViewTrainingOpportunities.js";
import CommonQuestions from "./CommonQuestions.js";
import WebsiteFooter from "../general/WebsiteFooter.js";

function Homepage() {
  /*
  state = { details: [], };

  componentDidMount() {
    let data;
    axios.get("http://127.0.0.1:8000/register/")
      .then(res => {
        data = res.data;
        this.setState({
          details: data
        });
      })
      .catch((err) => {});
  }
  */
    return (
      /*     استدعاع للمعلومات
      <div>
        {this.state.details.map((output, id) => (
          <div key={id}>
          <h1>{output.Fullname}</h1>
          </div>
        ))}
      </div>
      */
      <>
        <Header />
        <Introduction />
        <ViewTrainingOpportunities />
        <CommonQuestions />
        <WebsiteFooter />
      </>
    );
  }


export default Homepage;
