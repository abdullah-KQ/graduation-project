import React from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import RegisterStudent from "./components/RegisterPage/RegisterStudent/RegisterStudent";
import RegisterSupervisor from "./components/RegisterPage/RegisterSupervisor/RegisterSupervisor";
import RegisterTrainingBody from "./components/RegisterPage/RegisterTrainingBody/RegisterTrainingBody";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register/Student" element={<RegisterStudent />} />
          <Route path="/register/Supervisor" element={<RegisterSupervisor />} />
          <Route path="/register/TrainingBody" element={<RegisterTrainingBody />} />
        </Routes>
      </div>
    );
  }

export default App;
