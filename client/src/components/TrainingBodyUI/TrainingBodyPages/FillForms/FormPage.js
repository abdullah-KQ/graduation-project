import React, {useEffect, useState, useContext } from 'react'
import HeaderTrainingBody from './HeaderTrainingBody';
import GuideNav from './GuideNav';
import WebsiteFooter from '../../../general/WebsiteFooter';
import StudentContex from '../../../../contex/StudentContex';
import TrainingBodyContex from '../../../../contex/TrainingBodyContex';
import axios from '../../../../api/axios';

const URL_AddOpportunity = "AddOpportunity/";
const URL_Form4 = "form4/";
const URL_Form5 = "form5/";
const URL_Form9 = "form9/";


const FormPage = () => {

    const { StudentInfo } = useContext(StudentContex);
    const { TrainingBodyInfo } = useContext(TrainingBodyContex);

    const [isForm4, setIsForm4] = useState("");
    const [isForm4id, setIsForm4id] = useState("");
    const [isForm5, setIsForm5] = useState("");
    const [isForm5id, setIsForm5id] = useState("");
    const [isForm9, setIsForm9] = useState("");
    const [isForm9id, setIsForm9id] = useState("");

    const [AttendanceAccuracy1, setAttendanceAccuracy1] = useState("");
    const [GeneralAppearance1, setGeneralAppearance1] = useState("");
    const [Enthusiasm1, setEnthusiasm1] = useState("");
    const [AbilityToAnalyze1, setAbilityToAnalyze1] = useState("");
    const [AccuracyOutput1, setAccuracyOutput1] = useState("");
    const [AbilityPresent1, setAbilityPresent1] = useState("");
    const [AbilityReport1, setAbilityReport1] = useState("");
    const [RelationshipTrainer1, setRelationshipTrainer1] = useState("");
    const [RelationshipCoWorkers1, setRelationshipCoWorkers1] = useState("");
    const [Flexibility1, setFlexibility1] = useState("");
    const [AbilityLearn1, setAbilityLearn1] = useState("");
    const [AbilityDecision1, setAbilityDecision1] = useState("");
    const [GeneralPerformance1, setGeneralPerformance1] = useState("");
    const [Strengths1, setStrengths1] = useState("");
    const [Weaknesses1, setWeaknesses1] = useState("");
    const [AreTraineeSkills1, setAreTraineeSkills1] = useState("");
    const [Comments1, setComments1] = useState("");

    const [AttendanceAccuracy2, setAttendanceAccuracy2] = useState("");
    const [GeneralAppearance2, setGeneralAppearance2] = useState("");
    const [Enthusiasm2, setEnthusiasm2] = useState("");
    const [AbilityToAnalyze2, setAbilityToAnalyze2] = useState("");
    const [AccuracyOutput2, setAccuracyOutput2] = useState("");
    const [AbilityPresent2, setAbilityPresent2] = useState("");
    const [AbilityReport2, setAbilityReport2] = useState("");
    const [RelationshipTrainer2, setRelationshipTrainer2] = useState("");
    const [RelationshipCoWorkers2, setRelationshipCoWorkers2] = useState("");
    const [Flexibility2, setFlexibility2] = useState("");
    const [AbilityLearn2, setAbilityLearn2] = useState("");
    const [AbilityDecision2, setAbilityDecision2] = useState("");
    const [GeneralPerformance2, setGeneralPerformance2] = useState("");
    const [Strengths2, setStrengths2] = useState("");
    const [Weaknesses2, setWeaknesses2] = useState("");
    const [AreTraineeSkills2, setAreTraineeSkills2] = useState("");
    const [Comments2, setComments2] = useState("");

    const [WeekNo, setWeekNo] = useState("");
    const [StudentAttendenceSunday, setStudentAttendenceSunday] = useState("");
    const [StudentAttendenceMonday, setStudentAttendenceMonday] = useState("");
    const [StudentAttendenceTuesday, setStudentAttendenceTuesday] = useState("");
    const [StudentAttendenceWednesday, setStudentAttendenceWednesday] = useState("");
    const [StudentAttendenceThursday, setStudentAttendenceThursday] = useState("");
    const [TasksThisWeek, setTasksThisWeek] = useState("");
    const [SoftwarUsedThisWeek, setSoftwarUsedThisWeek] = useState("");


    const getData = async () => {
        try {
          const response = await axios.get(URL_AddOpportunity, {});
          const Data = response.data.filter(
            (Data) => Data.student == StudentInfo.Id
          );
          const Data2 = Data.filter((Data) => Data.IsItAccepted == "true");
          const response2 = await axios.get(URL_Form4+Data2[0].student+"/", {});
          setIsForm4(response2.data.IsItCompleted)
          setIsForm4id(response2.data.id)
          const response3 = await axios.get(URL_Form5+Data2[0].student+"/", {});
          setIsForm5(response3.data.IsItCompleted)
          setIsForm5id(response3.data.id)
          const response4 = await axios.get(URL_Form9+Data2[0].student+"/", {});
          setIsForm9(response4.data.IsItCompleted)
          setIsForm9id(response4.data.id)
        } catch (err) {
          console.log(err.response);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);


    const isFormExisting = () => {
        if (isForm4 == "false") {
            return (
            <div className="Fill-Forms-Card">
            <form onSubmit={handleSubmitform4} className="Fill-Forms-form">
            <p className="p-Fill-Form"> تعبئة نموذج تقيم المتدرب التقرير الاول </p>

            <label htmlFor="AttendanceAccuracy1" className="label-field">
              : الحضور والدقة في الوصول والمغادرة
            </label>
            <select
              id="AttendanceAccuracy1"
              className="field"
              required
              onChange={(e) => setAttendanceAccuracy1(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="GeneralAppearance1" className="label-field">
              : المظهر العام
            </label>
            <select
              id="GeneralAppearance1"
              className="field"
              required
              onChange={(e) => setGeneralAppearance1(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="Enthusiasm1" className="label-field">
              : الحماس والاهتمام بالعمل
            </label>
            <select
              id="Enthusiasm1"
              className="field"
              required
              onChange={(e) => setEnthusiasm1(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="AbilityToAnalyze1" className="label-field">
              : القدرة على تحليل وفهم المهام
            </label>
            <select
              id="AbilityToAnalyze1"
              className="field"
              required
              onChange={(e) => setAbilityToAnalyze1(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="AccuracyOutput1" className="label-field">
              : الدقة وجودة العمل 
            </label>
            <select
              id="AccuracyOutput1"
              className="field"
              required
              onChange={(e) => setAccuracyOutput1(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="AbilityPresent1" className="label-field">
              : القدرة على عرض العمل
            </label>
            <select
              id="AbilityPresent1"
              className="field"
              required
              onChange={(e) => setAbilityPresent1(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="AbilityReport1" className="label-field">
              : القدرة على انشاء تقارير عن العمل
            </label>
            <select
              id="AbilityReport1"
              className="field"
              required
              onChange={(e) => setAbilityReport1(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="RelationshipTrainer1" className="label-field">
              : علاقته بمدربه
            </label>
            <select
              id="RelationshipTrainer1"
              className="field"
              required
              onChange={(e) => setRelationshipTrainer1(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="RelationshipCoWorkers1" className="label-field">
              : العلاقة بزملاء العمل
            </label>
            <select
              id="RelationshipCoWorkers1"
              className="field"
              required
              onChange={(e) => setRelationshipCoWorkers1(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="Flexibility1" className="label-field">
              : المرونة والقدرة على التكيف
            </label>
            <select
              id="Flexibility1"
              className="field"
              required
              onChange={(e) => setFlexibility1(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="AbilityLearn1" className="label-field">
              : القدرة على التعلم والبحث والابتكار
            </label>
            <select
              id="AbilityLearn1"
              className="field"
              required
              onChange={(e) => setAbilityLearn1(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="AbilityDecision1" className="label-field">
              : القدرة على اتخاذ القرار أو الحكم
            </label>
            <select
              id="AbilityDecision1"
              className="field"
              required
              onChange={(e) => setAbilityDecision1(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="GeneralPerformance1" className="label-field">
              : الأداء العام
            </label>
            <select
              id="GeneralPerformance1"
              className="field"
              required
              onChange={(e) => setGeneralPerformance1(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="Strengths1" className="label-field">
               : نقاط قوة الطالب 
            </label>
            <textarea
              type="text"
              id="Strengths1"
              className="field"
              onChange={(e) => setStrengths1(e.target.value)}
              required
            />


            <label htmlFor="Weaknesses1" className="label-field">
            : نقاط الضعف في الطالب 
            </label>
            <textarea
              type="text"
              id="Weaknesses1"
              className="field"
              onChange={(e) => setWeaknesses1(e.target.value)}
              required
            />
            
            <label htmlFor="AreTraineeSkills1" className="label-field">
            هل مهارات ومؤهلات المتدرب مناسبة لميدان التدريب؟
            </label>
            <textarea
              type="text"
              id="AreTraineeSkills1"
              className="field"
              onChange={(e) => setAreTraineeSkills1(e.target.value)}
              required
            />

            <label htmlFor="Comments1" className="label-field">
              : تعليقات اخرى 
            </label>
            <textarea
              type="text"
              id="Comments1"
              className="field"
              onChange={(e) => setComments1(e.target.value)}
              required
            />

            <button
              className="submit_button">
              تسليم النموذج
            </button>
          </form>

        </div>
      )

        }else if(isForm5 == "false"){
            return (
                    <div className="Fill-Forms-Card">
                    <form onSubmit={handleSubmitform5} className="Fill-Forms-form">
                    <p className="p-Fill-Form"> تعبئة نموذج تقيم المتدرب التقرير النهائي </p>
        
                    <label htmlFor="AttendanceAccuracy2" className="label-field">
                      : الحضور والدقة في الوصول والمغادرة
                    </label>
                    <select
                      id="AttendanceAccuracy2"
                      className="field"
                      required
                      onChange={(e) => setAttendanceAccuracy2(e.target.value)}
                    >
                      <option value="choose"> -- اختر التقيم -- </option>
                      <option value="5">ممتاز</option>
                      <option value="4">جيد جدًا</option>
                      <option value="3">جيد</option>
                      <option value="2">مقبول</option>
                      <option value="1">ضعيف</option>
                    </select>
        
                    <label htmlFor="GeneralAppearance2" className="label-field">
                      : المظهر العام
                    </label>
                    <select
                      id="GeneralAppearance2"
                      className="field"
                      required
                      onChange={(e) => setGeneralAppearance2(e.target.value)}
                    >
                      <option value="choose"> -- اختر التقيم -- </option>
                      <option value="5">ممتاز</option>
                      <option value="4">جيد جدًا</option>
                      <option value="3">جيد</option>
                      <option value="2">مقبول</option>
                      <option value="1">ضعيف</option>
                    </select>
        
                    <label htmlFor="Enthusiasm2" className="label-field">
                      : الحماس والاهتمام بالعمل
                    </label>
                    <select
                      id="Enthusiasm2"
                      className="field"
                      required
                      onChange={(e) => setEnthusiasm2(e.target.value)}
                    >
                      <option value="choose"> -- اختر التقيم -- </option>
                      <option value="5">ممتاز</option>
                      <option value="4">جيد جدًا</option>
                      <option value="3">جيد</option>
                      <option value="2">مقبول</option>
                      <option value="1">ضعيف</option>
                    </select>
        
                    <label htmlFor="AbilityToAnalyze2" className="label-field">
                      : القدرة على تحليل وفهم المهام
                    </label>
                    <select
                      id="AbilityToAnalyze2"
                      className="field"
                      required
                      onChange={(e) => setAbilityToAnalyze2(e.target.value)}
                    >
                      <option value="choose"> -- اختر التقيم -- </option>
                      <option value="5">ممتاز</option>
                      <option value="4">جيد جدًا</option>
                      <option value="3">جيد</option>
                      <option value="2">مقبول</option>
                      <option value="1">ضعيف</option>
                    </select>
        
                    <label htmlFor="AccuracyOutput2" className="label-field">
                      : الدقة وجودة العمل 
                    </label>
                    <select
                      id="AccuracyOutput2"
                      className="field"
                      required
                      onChange={(e) => setAccuracyOutput2(e.target.value)}
                    >
                      <option value="choose"> -- اختر التقيم -- </option>
                      <option value="5">ممتاز</option>
                      <option value="4">جيد جدًا</option>
                      <option value="3">جيد</option>
                      <option value="2">مقبول</option>
                      <option value="1">ضعيف</option>
                    </select>
        
                    <label htmlFor="AbilityPresent2" className="label-field">
                      : القدرة على عرض العمل
                    </label>
                    <select
                      id="AbilityPresent2"
                      className="field"
                      required
                      onChange={(e) => setAbilityPresent2(e.target.value)}
                    >
                      <option value="choose"> -- اختر التقيم -- </option>
                      <option value="5">ممتاز</option>
                      <option value="4">جيد جدًا</option>
                      <option value="3">جيد</option>
                      <option value="2">مقبول</option>
                      <option value="1">ضعيف</option>
                    </select>
        
                    <label htmlFor="AbilityReport2" className="label-field">
                      : القدرة على انشاء تقارير عن العمل
                    </label>
                    <select
                      id="AbilityReport2"
                      className="field"
                      required
                      onChange={(e) => setAbilityReport2(e.target.value)}
                    >
                      <option value="choose"> -- اختر التقيم -- </option>
                      <option value="5">ممتاز</option>
                      <option value="4">جيد جدًا</option>
                      <option value="3">جيد</option>
                      <option value="2">مقبول</option>
                      <option value="1">ضعيف</option>
                    </select>
        
                    <label htmlFor="RelationshipTrainer2" className="label-field">
                      : علاقته بمدربه
                    </label>
                    <select
                      id="RelationshipTrainer2"
                      className="field"
                      required
                      onChange={(e) => setRelationshipTrainer2(e.target.value)}
                    >
                      <option value="choose"> -- اختر التقيم -- </option>
                      <option value="5">ممتاز</option>
                      <option value="4">جيد جدًا</option>
                      <option value="3">جيد</option>
                      <option value="2">مقبول</option>
                      <option value="1">ضعيف</option>
                    </select>
        
                    <label htmlFor="RelationshipCoWorkers2" className="label-field">
                      : العلاقة بزملاء العمل
                    </label>
                    <select
                      id="RelationshipCoWorkers2"
                      className="field"
                      required
                      onChange={(e) => setRelationshipCoWorkers2(e.target.value)}
                    >
                      <option value="choose"> -- اختر التقيم -- </option>
                      <option value="5">ممتاز</option>
                      <option value="4">جيد جدًا</option>
                      <option value="3">جيد</option>
                      <option value="2">مقبول</option>
                      <option value="1">ضعيف</option>
                    </select>
        
                    <label htmlFor="Flexibility2" className="label-field">
                      : المرونة والقدرة على التكيف
                    </label>
                    <select
                      id="Flexibility2"
                      className="field"
                      required
                      onChange={(e) => setFlexibility2(e.target.value)}
                    >
                      <option value="choose"> -- اختر التقيم -- </option>
                      <option value="5">ممتاز</option>
                      <option value="4">جيد جدًا</option>
                      <option value="3">جيد</option>
                      <option value="2">مقبول</option>
                      <option value="1">ضعيف</option>
                    </select>
        
                    <label htmlFor="AbilityLearn2" className="label-field">
                      : القدرة على التعلم والبحث والابتكار
                    </label>
                    <select
                      id="AbilityLearn2"
                      className="field"
                      required
                      onChange={(e) => setAbilityLearn2(e.target.value)}
                    >
                      <option value="choose"> -- اختر التقيم -- </option>
                      <option value="5">ممتاز</option>
                      <option value="4">جيد جدًا</option>
                      <option value="3">جيد</option>
                      <option value="2">مقبول</option>
                      <option value="1">ضعيف</option>
                    </select>
        
                    <label htmlFor="AbilityDecision2" className="label-field">
                      : القدرة على اتخاذ القرار أو الحكم
                    </label>
                    <select
                      id="AbilityDecision2"
                      className="field"
                      required
                      onChange={(e) => setAbilityDecision2(e.target.value)}
                    >
                      <option value="choose"> -- اختر التقيم -- </option>
                      <option value="5">ممتاز</option>
                      <option value="4">جيد جدًا</option>
                      <option value="3">جيد</option>
                      <option value="2">مقبول</option>
                      <option value="1">ضعيف</option>
                    </select>
        
                    <label htmlFor="GeneralPerformance2" className="label-field">
                      : الأداء العام
                    </label>
                    <select
                      id="GeneralPerformance2"
                      className="field"
                      required
                      onChange={(e) => setGeneralPerformance2(e.target.value)}
                    >
                      <option value="choose"> -- اختر التقيم -- </option>
                      <option value="5">ممتاز</option>
                      <option value="4">جيد جدًا</option>
                      <option value="3">جيد</option>
                      <option value="2">مقبول</option>
                      <option value="1">ضعيف</option>
                    </select>
        
                    <label htmlFor="Strengths2" className="label-field">
                       : نقاط قوة الطالب 
                    </label>
                    <textarea
                      type="text"
                      id="Strengths2"
                      className="field"
                      onChange={(e) => setStrengths2(e.target.value)}
                      required
                    />
        
        
                    <label htmlFor="Weaknesses2" className="label-field">
                    : نقاط الضعف في الطالب 
                    </label>
                    <textarea
                      type="text"
                      id="Weaknesses2"
                      className="field"
                      onChange={(e) => setWeaknesses2(e.target.value)}
                      required
                    />
                    
                    <label htmlFor="AreTraineeSkills2" className="label-field">
                    هل مهارات ومؤهلات المتدرب مناسبة لميدان التدريب؟
                    </label>
                    <textarea
                      type="text"
                      id="AreTraineeSkills2"
                      className="field"
                      onChange={(e) => setAreTraineeSkills2(e.target.value)}
                      required
                    />
        
                    <label htmlFor="Comments2" className="label-field">
                      : تعليقات اخرى 
                    </label>
                    <textarea
                      type="text"
                      id="Comments2"
                      className="field"
                      onChange={(e) => setComments2(e.target.value)}
                      required
                    />
        
                    <button
                      className="submit_button">
                      تسليم النموذج
                    </button>
                  </form>
        
                </div>
              )

        }else if(isForm9 == "false"){

            return (
                <div className="Fill-Forms-Card">
                <form onSubmit={handleSubmitform9} className="Fill-Forms-form">
                <p className="p-Fill-Form"> تعبئة النموذج الاسبوعي </p>

            <label htmlFor="WeekNo" className="label-field">
               : رقم الاسبوع 
            </label>
            <textarea
              type="text"
              id="WeekNo"
              className="field"
              onChange={(e) => setWeekNo(e.target.value)}
              required
            />

                <label htmlFor="StudentAttendenceSunday" className="label-field">
                      : حضور يوم الاحد
                    </label>
                    <select
                      id="StudentAttendenceSunday"
                      className="field"
                      required
                      onChange={(e) => setStudentAttendenceSunday(e.target.value)}
                    >
                      <option value="choose"> -- اختر  -- </option>
                      <option value="Present">حاضر</option>
                      <option value="absent">غائب </option>
                      <option value="excused absent">غائب بعذر</option>
                    </select>

                    <label htmlFor="StudentAttendenceMonday" className="label-field">
                      : حضور يوم الاثنين
                    </label>
                    <select
                      id="StudentAttendenceMonday"
                      className="field"
                      required
                      onChange={(e) => setStudentAttendenceMonday(e.target.value)}
                    >
                      <option value="choose"> -- اختر  -- </option>
                      <option value="Present">حاضر</option>
                      <option value="absent">غائب </option>
                      <option value="excused absent">غائب بعذر</option>
                    </select>

                    <label htmlFor="StudentAttendenceTuesday" className="label-field">
                      : حضور يوم الثلاثاء
                    </label>
                    <select
                      id="StudentAttendenceTuesday"
                      className="field"
                      required
                      onChange={(e) => setStudentAttendenceTuesday(e.target.value)}
                    >
                      <option value="choose"> -- اختر  -- </option>
                      <option value="Present">حاضر</option>
                      <option value="absent">غائب </option>
                      <option value="excused absent">غائب بعذر</option>
                    </select>

                    <label htmlFor="StudentAttendenceWednesday" className="label-field">
                      : حضور يوم الاربعاء
                    </label>
                    <select
                      id="StudentAttendenceWednesday"
                      className="field"
                      required
                      onChange={(e) => setStudentAttendenceWednesday(e.target.value)}
                    >
                      <option value="choose"> -- اختر  -- </option>
                      <option value="Present">حاضر</option>
                      <option value="absent">غائب </option>
                      <option value="excused absent">غائب بعذر</option>
                    </select>

                    <label htmlFor="StudentAttendenceThursday" className="label-field">
                      : حضور يوم الخميس
                    </label>
                    <select
                      id="StudentAttendenceThursday"
                      className="field"
                      required
                      onChange={(e) => setStudentAttendenceThursday(e.target.value)}
                    >
                      <option value="choose"> -- اختر  -- </option>
                      <option value="Present">حاضر</option>
                      <option value="absent">غائب </option>
                      <option value="excused absent">غائب بعذر</option>
                    </select>
            

            <label htmlFor="TasksThisWeek" className="label-field">
                    : المهام المؤداة في هذا الاسبوع
                </label>
                <textarea
                    type="text"
                    id="TasksThisWeek"
                    className="field"
                    onChange={(e) => setTasksThisWeek(e.target.value)}
                    required
                />

                <label htmlFor="SoftwarUsedThisWeek" className="label-field">
                    : الاجهزة المستخدمة في هذا الاسبوع
                </label>
                <textarea
                    type="text"
                    id="SoftwarUsedThisWeek"
                    className="field"
                    onChange={(e) => setSoftwarUsedThisWeek(e.target.value)}
                    required
                />

                <button
                  className="submit_button">
                  تسليم النموذج
                </button>
              </form>
    
            </div>
          )

        }else{
            return(<div>
                <p className="p-Fill-Form">لا توجد نماذج حاليا تحتاج التعبئة</p>
                </div>);
        }


    }
    const handleSubmitform4 = async (e) => {
        e.preventDefault();
        try {
            await axios.put("form4/"+StudentInfo.Id+"/",{
              id:isForm4id,    
              TrainingBody: TrainingBodyInfo.Id,
              student: StudentInfo.Id,
              AttendanceAccuracy: AttendanceAccuracy1,
              GeneralAppearance: GeneralAppearance1,
              Enthusiasm: Enthusiasm1,
              AbilityToAnalyze: AbilityToAnalyze1,
              AccuracyOutput: AccuracyOutput1,
              AbilityPresent: AbilityPresent1,
              AbilityReport: AbilityReport1,
              RelationshipTrainer: RelationshipTrainer1,
              RelationshipCoWorkers: RelationshipCoWorkers1,
              Flexibility: Flexibility1,
              AbilityLearn: AbilityLearn1,
              AbilityDecision: AbilityDecision1,
              GeneralPerformance: GeneralPerformance1,
              Strengths: Strengths1,
              Weaknesses: Weaknesses1,
              AreTraineeSkills: AreTraineeSkills1,
              Comments: Comments1,
              IsItCompleted: "true"
            });
            setIsForm4("true")
          } catch (err) {
            console.log(err.response);
          }
        };

      const handleSubmitform5 = async (e) => {
        e.preventDefault();
        try {
            await axios.put("form5/"+StudentInfo.Id+"/",{
              id:isForm5id,    
              TrainingBody: TrainingBodyInfo.Id,
              student: StudentInfo.Id,
              AttendanceAccuracy: AttendanceAccuracy2,
              GeneralAppearance: GeneralAppearance2,
              Enthusiasm: Enthusiasm2,
              AbilityToAnalyze: AbilityToAnalyze2,
              AccuracyOutput: AccuracyOutput2,
              AbilityPresent: AbilityPresent2,
              AbilityReport: AbilityReport2,
              RelationshipTrainer: RelationshipTrainer2,
              RelationshipCoWorkers: RelationshipCoWorkers2,
              Flexibility: Flexibility2,
              AbilityLearn: AbilityLearn2,
              AbilityDecision: AbilityDecision2,
              GeneralPerformance: GeneralPerformance2,
              Strengths: Strengths2,
              Weaknesses: Weaknesses2,
              AreTraineeSkills: AreTraineeSkills2,
              Comments: Comments2,
              IsItCompleted: "true"
            });
            setIsForm5("true")
          } catch (err) {
            console.log(err.response);
          }
        
      };

      const handleSubmitform9 = async (e) => {
        e.preventDefault();
        try {
            await axios.put("form9/"+StudentInfo.Id+"/",{
              id:isForm9id,
              TrainingBody: TrainingBodyInfo.Id,
              student : StudentInfo.id,
              WeekNo: WeekNo,
              StudentAttendenceSunday: StudentAttendenceSunday,
              StudentAttendenceMonday: StudentAttendenceMonday,
              StudentAttendenceTuesday: StudentAttendenceTuesday,
              StudentAttendenceWednesday: StudentAttendenceWednesday,
              StudentAttendenceThursday: StudentAttendenceThursday,
              TasksThisWeek: TasksThisWeek,
              SoftwarUsedThisWeek: SoftwarUsedThisWeek,
              IsItCompleted: "true"
            });
            setIsForm9("true")
          } catch (err) {
            console.log(err.response);
          }
        };


  return (
    <div>      
    <HeaderTrainingBody />
    <div className="main-div">
      <div className="Fill-Forms-box">
        {isFormExisting()}
      </div>
    <GuideNav />
    </div>
    <WebsiteFooter />
    </div>
  )
}

export default FormPage