import React, { Component } from "react";
import Header from "../general/Header.js";
import WebsiteFooter from "../general/WebsiteFooter.js";
import LoginBox from "./LoginBox.js";

class LoginPage extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <LoginBox />
        <WebsiteFooter />
      </div>
    );
  }
}

export default LoginPage;
