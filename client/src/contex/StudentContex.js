import { createContext, useState, useEffect } from "react";

const getInitialState = () => {
  const StudentInfo = localStorage.getItem("StudentInfo");
  return StudentInfo
    ? JSON.parse(StudentInfo)
    : {
        Id: 0,
        UserName: "",
        Fullname: "",
        Phone_num: "",
        Email: "",
        Role: "",
        Uni_id: "",
        Department: "",
        College: "",
      };
};

const StudentContex = createContext();

export function StudentProvider({ children }) {
  const [StudentInfo, setStudentInfo] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("StudentInfo", JSON.stringify(StudentInfo));
  }, [StudentInfo]);

  return (
    <StudentContex.Provider value={{ StudentInfo, setStudentInfo }}>
      {children}
    </StudentContex.Provider>
  );
}

export default StudentContex;
