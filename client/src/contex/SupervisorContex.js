import { createContext, useState, useEffect } from "react";

const getInitialState = () => {
  const SupervisorInfo = localStorage.getItem("SupervisorInfo");
  return SupervisorInfo
    ? JSON.parse(SupervisorInfo)
    : {
        Id: 0,
        UserName: "",
        Fullname: "",
        Phone_num: "",
        Email: "",
        Role: "",
        S_id: "",
        Department: "",
        College: "",
        Verified: "",
      };
};

const SupervisorContex = createContext();

export function SupervisorProvider({ children }) {
  const [SupervisorInfo, setSupervisorInfo] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("SupervisorInfo", JSON.stringify(SupervisorInfo));
  }, [SupervisorInfo]);

  return (
    <SupervisorContex.Provider value={{ SupervisorInfo, setSupervisorInfo }}>
      {children}
    </SupervisorContex.Provider>
  );
}

export default SupervisorContex;
