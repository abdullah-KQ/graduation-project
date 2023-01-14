import React, { Component } from "react";
//import axios from "axios";
import Header from "../general/Header.js";
import Introduction from "./Introduction.js";
import ViewTrainingOpportunities from "./ViewTrainingOpportunities.js";
import ConnectWithUs from "./ConnectWithUs.js";
import WebsiteFooter from "../general/WebsiteFooter.js";

class Homepage extends Component {
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
  render() {
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
      <div>
        <Header />
        <Introduction />
        <ViewTrainingOpportunities />
        <ConnectWithUs />
        <WebsiteFooter />
      </div>
    );
  }
}

export default Homepage;
