import { createContext, useState, useEffect } from "react";

const getInitialState = () => {
  const OppInfo = localStorage.getItem("OppInfo");
  return OppInfo
    ? JSON.parse(OppInfo)
    : {
        Id: 0,
        Opport_name: "",
        Description: "",
        Training_tasks: "",
        Gender: "",
        Loaction: "",
        Contact_Person: "",
        Position: "",
        vacancies: "",
        StartDate: "",
        FinishDate: "",
      };
};

const OppInfoContex = createContext();

export function OppInfoProvider({ children }) {
  const [OppInfo, setOppInfo] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("OppInfo", JSON.stringify(OppInfo));
  }, [OppInfo]);

  return (
    <OppInfoContex.Provider value={{ OppInfo, setOppInfo }}>
      {children}
    </OppInfoContex.Provider>
  );
}

export default OppInfoContex;