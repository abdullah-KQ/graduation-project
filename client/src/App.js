import React, { Component } from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
