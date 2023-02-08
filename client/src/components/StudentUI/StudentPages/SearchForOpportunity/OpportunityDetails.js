import React, {useContext, useEffect, useState} from 'react'
import HeaderStudent from '../../HeaderStudent';
import GuideNav from '../../GuideNav';
import WebsiteFooter from '../../../general/WebsiteFooter';
import OppInfoContex from '../../../../contex/OppInfo';
import StudentContex from '../../../../contex/StudentContex';
import axios from '../../../../api/axios';


const URL_User = "user/";
const URL_TrainingBody = "TrainingBody/";
const URL_SuperviseStudents = "SuperviseStudents/";
const URL_AddOpportunity = "AddOpportunity/";


const OpportunityDetails = () => {
  const {OppInfo} =useContext(OppInfoContex)
  const {StudentInfo} =useContext(StudentContex)
  const [TBinfo, setTBinfo] = useState({})
  const [UTBinfo, setUTBinfo] = useState({})
  const [Supervisorid, setSupervisorid] = useState({})
  const [success, setsuccess] = useState(true)

  const getData = async (e) => {
    try {
      const response = await axios.get(URL_TrainingBody+OppInfo.Id, {});
      setTBinfo(response.data)

      const response2 = await axios.get(URL_User+response.data.UserName, {});
      setUTBinfo(response2.data)

      const response3 = await axios.get(URL_SuperviseStudents, {});

      const Data = response3.data.filter(
        (Supervise) => StudentInfo.Id == Supervise.student
      );
      setSupervisorid(Data[0].Supervisor)





    } catch (err) {
      console.log(err.response);
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try{
      await axios.post(URL_AddOpportunity, {
        TrainingBody:TBinfo.id,
        Opportunity:OppInfo.Id,
        Supervisor:Supervisorid,
        student:StudentInfo.Id,
        IsItAccepted:"false",
      });
      setsuccess(false)
    }catch{
      
    }
    
  };

  useEffect(() => {
    getData()
  }, []);
  
  const isAdded = ()=> {
    if(success){
    return(          
     <button className="button-Add-Opp" onClick={handleClick}>
       للتقديم على التدريب
     </button> )
  }else{
    return <p className="p-isAdded"> تم تقديم الطلب بنجاح </p>
  }
  }

    return (
        <>
          <HeaderStudent />
          <div className="main-div">
            <div>
              <div className="Opp-box">
              <p className="p-Opp-Card">
              <br />
              : اسم جهة التدريب
              <br />
              {UTBinfo.Fullname}
              <br />
              <br />
              : اسم الفرصة التدريبية
              <br />
              {OppInfo.Opport_name}
              <br />
              <br />
              : وصف للفرصة التدريبية
              <br />
              {OppInfo.Description}
              <br />
              <br />
              : المهام المطلوبة من المتدريب
              <br />
              {OppInfo.Training_tasks}
              <br />
              <br />
              : التدريب للموجة 
              <br />
              {OppInfo.Gender}
              <br />
              <br />
              : موقع التدريب
              <br />
              {OppInfo.Loaction}
              <br />
              <br />
              : اسم المسؤل عن التدريب من جهة التدريب
              <br />
              {OppInfo.Contact_Person}
              <br />
              <br />
              : منصبة في جهة التدريب
              <br />
              {OppInfo.Position}
              <br />
              <br />
              : المقاعد المتاحة للتدريب
              <br />
              {OppInfo.vacancies}
              <br />
              <br />
              : تاريخ بدء التدريب
              <br />
              {OppInfo.StartDate}
              <br />
              <br />
              : تاريخ انتهاء التدريب
              <br />
              {OppInfo.FinishDate}
              <br />
              <br />
              : تاريخ انتهاء التدريب
              <br />
              {OppInfo.FinishDate}
              </p>
                {isAdded()}
              </div>
            </div>
            <GuideNav />
          </div>
          <WebsiteFooter />
        </>
      );
}

export default OpportunityDetails