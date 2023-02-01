import {  createContext, useState } from "react";


 const SupervisorContex = createContext();

export function SupervisorProvider({children}){
    const [SupervisorInfo,setSupervisorInfo] =useState({
        UserName: "",
        Fullname: "",
        Phone_num: "",
        Email: "",
        Role: "",
        S_id: "",
        Department: "",
        College: "",
        Verified: false,
    })

    return(
        <SupervisorContex.Provider value={{ SupervisorInfo ,setSupervisorInfo}}>
            {children}
        </SupervisorContex.Provider>
    )
}
    


export default SupervisorContex;