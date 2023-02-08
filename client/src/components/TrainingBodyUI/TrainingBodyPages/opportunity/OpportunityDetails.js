import React, {useContext, useEffect, useState} from 'react'
import HeaderTrainingBody from '../../HeaderTrainingBody';
import GuideNav from '../../GuideNav';
import WebsiteFooter from '../../../general/WebsiteFooter';
import OppInfoContex from '../../../../contex/OppInfo';
import TrainingBodyContex from '../../../../contex/TrainingBodyContex';
import ApplyList from './ApplyList';
import axios from '../../../../api/axios';

const URL_AddOpportunity ="AddOpportunity/";

const OpportunityDetails = () => {
  const {OppInfo} =useContext(OppInfoContex)
  const {TrainingBodyInfo} =useContext(TrainingBodyContex)

  const [apply, setApply] = useState([])

  const getData = async (e) => {
    try {
      const response = await axios.get(URL_AddOpportunity, {});
      const Data = response.data.filter(
        (Opportunity) => Opportunity.TrainingBody == TrainingBodyInfo.Id
      );
      const Data2 = Data.filter(
        (Opportunity) => Opportunity.IsItAccepted != "true"
      );
      setApply( Data2)
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getData();
  }, []);


    return (
        <>
          <HeaderTrainingBody />
          <div className="main-div">
            <div>
              <div className="Opp-box">
              <p className="p-Opp-Card">
              <br />
              : اسم جهة التدريب
              <br />
              {TrainingBodyInfo.Fullname}
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
              </div>
              <ApplyList apply={apply} />
            </div>
            <GuideNav />
          </div>
          <WebsiteFooter />
        </>
      );
}

export default OpportunityDetails