import React, {useContext, useEffect, useState} from 'react'
import HeaderStudent from '../../HeaderStudent';
import GuideNav from '../../GuideNav';
import WebsiteFooter from '../../../general/WebsiteFooter';
import OppInfoContex from '../../../../contex/OppInfo';
import StudentContex from '../../../../contex/StudentContex';
import axios from '../../../../api/axios';
import StudentsCard from './StudentsCard';


const URL_User = "user/";
const URL_TrainingBody = "TrainingBody/";
const URL_SuperviseStudents = "SuperviseStudents/";
const URL_AddOpportunity = "AddOpportunity/";
const URL_Students = "student/";
const URL_form7 = "form7/";



const OpportunityDetails = () => {
  const {OppInfo} =useContext(OppInfoContex)
  const {StudentInfo} =useContext(StudentContex)
  const [TBinfo, setTBinfo] = useState({})
  const [UTBinfo, setUTBinfo] = useState({})
  const [Supervisorid, setSupervisorid] = useState({})
  const [success, setsuccess] = useState(true)

  const [card, setCard] = useState([]);
  const [card2, setCard2] = useState([]);
  const [card3, setCard3] = useState([]);
  let content;


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
      console.log(Data[0].Supervisor)
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
        notification: "false"
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
      <>
      <p className="p-issoper"> يجب ان يكون لديك مشرف لارسال الطلب </p>       
     <button className="button-Add-Opp" onClick={handleClick}>
       للتقديم على التدريب
     </button>
     </> )
  }
  else{
    return <p className="p-isAdded"> تم تقديم الطلب بنجاح </p>
  }
  }

  const getData2 = async () => {
    try {
      const response = await axios.get(URL_AddOpportunity, {});
      
      const Data = response.data.filter(
        (Data) => Data.TrainingBody == OppInfo.Id
      );
      const Data2 = Data.filter(
        (Data) => Data.IsItAccepted == "true"
      );
      Data2.map((student) => {
            if (!card2.includes(student.student)) {
              setCard2((prevState) => [...prevState, student.student]);
            }}
            ); 

    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getData2();
  }, []);

  useEffect(() => {
    const newcard = Array.from(new Set(card2.map((a) => a))).map((id) => {
      return card2.find((a) => a === id);
    });
    setCard3(newcard);
  }, [card2]);

  const getData3 = async () => {
    try {
      const response = await axios.get(URL_form7, {});

      const Data = response.data.filter((Data) => 
        card3.map((a) => Data.student == a
        ))
        setCard(Data);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getData3();
  }, [card3]);



  if(card.length > 0){

    const resulte = card.map(card =><StudentsCard key={card.UserName} card={card}/>)

     content = resulte?.length ? resulte : <p className="p-Students-Card"> لا يوجد طلاب تحت اشرافك  </p>

  }else{
    if(card.length == 0){
      content = <p className="p-Students-Card"> لا يوجد طلاب تحت اشرافك  </p> 
    }else{
    const resulte =<StudentsCard key={card.UserName} card={card}/>
    
    content = resulte;
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
              <div>
                {content}
              </div>
            </div>
            <GuideNav />
          </div>
          <WebsiteFooter />
        </>
      );
}

export default OpportunityDetails