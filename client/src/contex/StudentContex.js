import {  createContext, useState } from "react";


 const StudentContex = createContext();

export function StudentProvider({children}){
    const [StudentInfo,setStudentInfo] =useState({
        UserName: "",
        Fullname: "",
        Phone_num: "",
        Email: "",
        Role: "",
        Uni_id: "",
        Department: "",
        College: "",
    })

    return(
        <StudentContex.Provider value={{ StudentInfo ,setStudentInfo}}>
            {children}
        </StudentContex.Provider>
    )
}
    


export default StudentContex;


