import { createContext, useState, useEffect } from "react";

const getInitialState = () => {
  const TrainingBodyInfo = localStorage.getItem("TrainingBodyInfo");
  return TrainingBodyInfo
    ? JSON.parse(TrainingBodyInfo)
    : {
        UserName: "",
        Fullname: "",
        Phone_num: "",
        Email: "",
        Role: "",
        Website: "",
        Address: "",
      };
};

const TrainingBodyContex = createContext();

export function TrainingBodyProvider({ children }) {
  const [TrainingBodyInfo, setTrainingBodyInfo] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("TrainingBodyInfo", JSON.stringify(TrainingBodyInfo));
  }, [TrainingBodyInfo]);

  return (
    <TrainingBodyContex.Provider
      value={{ TrainingBodyInfo, setTrainingBodyInfo }}
    >
      {children}
    </TrainingBodyContex.Provider>
  );
}

export default TrainingBodyContex;
