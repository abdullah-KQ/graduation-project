import React from "react";
import { Routes, Route } from "react-router-dom";
import { StudentProvider } from "./contex/StudentContex";
import { SupervisorProvider } from "./contex/SupervisorContex";
import { TrainingBodyProvider } from "./contex/TrainingBodyContex";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import RegisterStudent from "./components/RegisterPage/RegisterStudent/RegisterStudent";
import RegisterSupervisor from "./components/RegisterPage/RegisterSupervisor/RegisterSupervisor";
import RegisterTrainingBody from "./components/RegisterPage/RegisterTrainingBody/RegisterTrainingBody";
import StudentHomepage from "./components/StudentUI/Homepage";
import SupervisorHomepage from "./components/SupervisorUI/Homepage";
import TrainingBodyHomepage from "./components/TrainingBodyUI/Homepage";

function App() {
  return (
    <div>
      <StudentProvider>
        <SupervisorProvider>
          <TrainingBodyProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/Login/" element={<LoginPage />} />
              <Route path="/register/" element={<RegisterPage />} />
              <Route path="/register/Student" element={<RegisterStudent />} />
              <Route path="/register/Supervisor" element={<RegisterSupervisor />}/>
              <Route path="/register/TrainingBody" element={<RegisterTrainingBody />} />
              <Route path="/Student/*" element={<StudentHomepage />} />
              <Route path="/Supervisor/*" element={<SupervisorHomepage />} />
              <Route path="/TrainingBody/*" element={<TrainingBodyHomepage />}/>
            </Routes>
          </TrainingBodyProvider>
        </SupervisorProvider>
      </StudentProvider>
    </div>
  );
}

export default App;
