import React, { Component } from "react";
import Header from "../general/Header.js";
import WebsiteFooter from "../general/WebsiteFooter.js";
import RegistrMainBox from "./RegistrMainBox.js";

class RegisterPage extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <RegistrMainBox />       
        <WebsiteFooter />
      </div>
    );
  }
}

export default RegisterPage;