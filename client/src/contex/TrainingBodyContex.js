import {  createContext, useState } from "react";


 const TrainingBodyContex = createContext();

export function TrainingBodyProvider({children}){
    const [TrainingBodyInfo,setTrainingBodyInfo] =useState({
        UserName: "",
        Fullname: "",
        Phone_num: "",
        Email: "",
        Role: "",
        Website: "",
        Address: "",
    })

    return(
        <TrainingBodyContex.Provider value={{ TrainingBodyInfo ,setTrainingBodyInfo}}>
            {children}
        </TrainingBodyContex.Provider>
    )
}
    


export default TrainingBodyContex;