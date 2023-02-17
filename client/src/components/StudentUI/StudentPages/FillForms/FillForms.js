import React, {useEffect, useState, useContext } from 'react'
import HeaderStudent from "../../HeaderStudent";
import GuideNav from "../../GuideNav";
import WebsiteFooter from "../../../general/WebsiteFooter";
import "./FillForms.css"
import StudentContex from '../../../../contex/StudentContex';
import axios from '../../../../api/axios';

const URL_AddOpportunity = "AddOpportunity/";
const URL_Form2 = "form2/";
const URL_Form7 = "form7/";


const FillForms = () => {

  const { StudentInfo } = useContext(StudentContex);
  const [isForm2, setIsForm2] = useState("");
  const [isForm2id, setIsForm2id] = useState("");
  const [isForm7, setIsForm7] = useState("");
  const [isForm7id, setIsForm7id] = useState("");

  
  const [AcademicYear, setAcademicYear] = useState("");
  const [Semester, setSemester] = useState("");
  const [Major, setMajor] = useState("");
  const [CGPA, setCGPA] = useState("");
  const [HoursEarned, setHoursEarned] = useState("");
  const [HoursRegistered, setHoursRegistered] = useState("");
  const [HoursRemaining, setHoursRemaining] = useState("");
  const [descriptionAboutCompany, setdescriptionAboutCompany] = useState("");


  const [SeriousTraining, setSeriousTraining] = useState("");
  const [ExperienceProvided, setExperienceProvided] = useState("");
  const [SuitableTrainingPlace, setSuitableTrainingPlace] = useState("");
  const [SeriousTrainer, setSeriousTrainer] = useState("");
  const [TimeGivenTraining, setTimeGivenTraining] = useState("");
  const [ExperienceTrainer, setExperienceTrainer] = useState("");
  const [HelpWorkingStaff, setHelpWorkingStaff] = useState("");
  const [FollowingPlan, setFollowingPlan] = useState("");
  const [AdvantagesProgram, setAdvantagesProgram] = useState("");
  const [TheCompatibility, setTheCompatibility] = useState("");
  const [benefits, setbenefits] = useState("");
  const [problems, setproblems] = useState("");
  const [expectations, setexpectations] = useState("");
  const [suggestions, setsuggestions] = useState("");
  const [recommend, setrecommend] = useState("");


  const getData = async () => {
    try {
      const response = await axios.get(URL_AddOpportunity, {});
      const Data = response.data.filter(
        (Data) => Data.student == StudentInfo.Id
      );
      const Data2 = Data.filter((Data) => Data.IsItAccepted == "true");
      const response2 = await axios.get(URL_Form2+Data2[0].student+"/", {});
      setIsForm2(response2.data.IsItCompleted)
      setIsForm2id(response2.data.id)
      const response3 = await axios.get(URL_Form7+Data2[0].student+"/", {});
      setIsForm7(response3.data.IsItCompleted)
      setIsForm7id(response3.data.id)
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const isForm2Existing = () => {
    if (isForm2 == "false") {
      return (
        <div className="Fill-Forms-Card">
          <form onSubmit={handleSubmitform2} className="Fill-Forms-form">
          <p className="p-Fill-Form"> تعبئة نموذج التقديم </p>
            <label htmlFor="AcademicYear" className="label-field">
              : السنة الدراسية
            </label>
            <input
              type="text"
              id="AcademicYear"
              className="field"
              onChange={(e) => setAcademicYear(e.target.value)}
              required
              placeholder="السنة الدراسية"
            />
            <label htmlFor="Semester" className="label-field">
              : الفصل الدراسي
            </label>
            <input
              type="text"
              id="Semester"
              className="field"
              onChange={(e) => setSemester(e.target.value)}
              required
              placeholder="الفصل الدراسي"
            />
            <label htmlFor="Major" className="label-field">
              : التخصص
            </label>
            <input
              type="text"
              id="Major"
              className="field"
              onChange={(e) => setMajor(e.target.value)}
              required
              placeholder="التخصص"
            />
            <label htmlFor="CGPA" className="label-field">
              : المعدل
            </label>
            <input
              type="text"
              id="CGPA"
              className="field"
              onChange={(e) => setCGPA(e.target.value)}
              required
              placeholder="المعدل"
            />
            <label htmlFor="HoursEarned" className="label-field">
              : الساعات المكتسبة
            </label>
            <input
              type="text"
              id="HoursEarned"
              className="field"
              onChange={(e) => setHoursEarned(e.target.value)}
              required
              placeholder="الساعات المكتسبة"
            />
            <label htmlFor="HoursRegistered" className="label-field">
              : الساعات المسجلة في الفصل الحالي
            </label>
            <input
              type="text"
              id="HoursRegistered"
              className="field"
              onChange={(e) => setHoursRegistered(e.target.value)}
              required
              placeholder="الساعات المسجلة"
            />
            <label htmlFor="HoursRemaining" className="label-field">
              : الساعات المتبقية
            </label>
            <input
              type="text"
              id="HoursRemaining"
              className="field"
              onChange={(e) => setHoursRemaining(e.target.value)}
              required
              placeholder="الساعات المتبقية"
            />
            <label htmlFor="descriptionAboutCompany" className="label-field">
              : وصف مختصر لجهة التدريب
            </label>
            <textarea
              type="text"
              id="descriptionAboutCompany"
              className="field"
              onChange={(e) => setdescriptionAboutCompany(e.target.value)}
              required
              placeholder="وصف لجهة التدريب"
            />
            <button
              className="submit_button">
              تسليم النموذج
            </button>
          </form>

        </div>
      )
    } else if(isForm7 == "false")
    {
      return (
        <div className="Fill-Forms-Card">
          <form onSubmit={handleSubmitform7} className="Fill-Forms-form">
          <p className="p-Fill-Form"> تعبئة نموذج التقيم </p>
          <label htmlFor="SeriousTraining" className="label-field">
              : مدى جدية التدريب
            </label>
            <select
              id="SeriousTraining"
              className="field"
              required
              onChange={(e) => setSeriousTraining(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="ExperienceProvided" className="label-field">
              : مدى استفادتك من التدريب
            </label>
            <select
              id="ExperienceProvided"
              className="field"
              required
              onChange={(e) => setExperienceProvided(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="SuitableTrainingPlace" className="label-field">
              : جودة مكان التدريب
            </label>
            <select
              id="SuitableTrainingPlace"
              className="field"
              required
              onChange={(e) => setSuitableTrainingPlace(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            
            <label htmlFor="SeriousTrainer" className="label-field">
              : مدى جدية المدريب
            </label>
            <select
              id="SeriousTrainer"
              className="field"
              required
              onChange={(e) => setSeriousTrainer(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            
            <label htmlFor="TimeGivenTraining" className="label-field">
              : الوقت المخصص للتدريب
            </label>
            <select
              id="TimeGivenTraining"
              className="field"
              required
              onChange={(e) => setTimeGivenTraining(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="ExperienceTrainer" className="label-field">
              : خبرة المدرب
            </label>
            <select
              id="ExperienceTrainer"
              className="field"
              required
              onChange={(e) => setExperienceTrainer(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="HelpWorkingStaff" className="label-field">
              : مدى تلقي المساعدة من طاقم العمل
            </label>
            <select
              id="HelpWorkingStaff"
              className="field"
              required
              onChange={(e) => setHelpWorkingStaff(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="FollowingPlan" className="label-field">
              : هل تم اتباع خطة التدريب
            </label>
            <select
              id="FollowingPlan"
              className="field"
              required
              onChange={(e) => setFollowingPlan(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="AdvantagesProgram" className="label-field">
              : مدى قوة برنامج التدريب
            </label>
            <select
              id="AdvantagesProgram"
              className="field"
              required
              onChange={(e) => setAdvantagesProgram(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="TheCompatibility" className="label-field">
              : مدى توافق البرنامج التدريبي مع التخصص  
            </label>
            <select
              id="TheCompatibility"
              className="field"
              required
              onChange={(e) => setTheCompatibility(e.target.value)}
            >
              <option value="choose"> -- اختر التقيم -- </option>
              <option value="5">ممتاز</option>
              <option value="4">جيد جدًا</option>
              <option value="3">جيد</option>
              <option value="2">مقبول</option>
              <option value="1">ضعيف</option>
            </select>

            <label htmlFor="benefits" className="label-field">
            ما هي الفوائد التي تلقيتها من التدريب؟
            </label>
            <textarea
              type="text"
              id="benefits"
              className="field"
              onChange={(e) => setbenefits(e.target.value)}
              required
            />

            <label htmlFor="problems" className="label-field">
               ما هي أكبر المشاكل التي واجهتها في التدريب؟
            </label>
            <textarea
              type="text"
              id="problems"
              className="field"
              onChange={(e) => setproblems(e.target.value)}
              required
            />

            <label htmlFor="expectations" className="label-field">
               هل كان التدريب بمستى توقعاتك ؟
            </label>
            <textarea
              type="text"
              id="expectations"
              className="field"
              onChange={(e) => setexpectations(e.target.value)}
              required
            />

            <label htmlFor="suggestions" className="label-field">
            ما هي اقتراحاتكم لتحسين البرنامج التدريبي؟
            </label>
            <textarea
              type="text"
              id="suggestions"
              className="field"
              onChange={(e) => setsuggestions(e.target.value)}
              required
            />

            <label htmlFor="recommend" className="label-field">
              : هل تنصح الاخرين بتدريب في هذه الفرصة
            </label>
            <select
              id="recommend"
              className="field"
              required
              onChange={(e) => setrecommend(e.target.value)}
            >
              <option value="choose"> -- اختر  -- </option>
              <option value="Yes">نعم</option>
              <option value="no">لا</option>
            </select>
            <button
              className="submit_button">
              تسليم النموذج
            </button>
          </form>

        </div>
      )
    }else {
      return(<div>
        <p className="p-Fill-Form">لا توجد نماذج حاليا تحتاج التعبئة</p>
      </div>);
    }
  };

  const handleSubmitform2 = async (e) => {
    e.preventDefault();
    try {
      await axios.put("form2/"+StudentInfo.Id+"/",{
        id:isForm2id,
        student : StudentInfo.id,
        AcademicYear : AcademicYear,
        Semester: Semester,
        Major: Major,
        CGPA: CGPA,
        HoursEarned: HoursEarned,
        HoursRegistered: HoursRegistered,
        HoursRemaining: HoursRemaining,
        descriptionAboutCompany: descriptionAboutCompany,
        IsItCompleted: "true"
      });
      setIsForm2("true")
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleSubmitform7 = async (e) => {
    e.preventDefault();
    try {
      await axios.put("form7/"+StudentInfo.Id+"/",{
        id:isForm7id,
        student : StudentInfo.id,
        SeriousTraining : SeriousTraining,
        ExperienceProvided: ExperienceProvided,
        SuitableTrainingPlace: SuitableTrainingPlace,
        SeriousTrainer: SeriousTrainer,
        TimeGivenTraining: TimeGivenTraining,
        ExperienceTrainer: ExperienceTrainer,
        HelpWorkingStaff: HelpWorkingStaff,
        FollowingPlan: FollowingPlan,
        AdvantagesProgram: AdvantagesProgram,
        TheCompatibility: TheCompatibility,
        benefits: benefits,
        problems: problems,
        expectations: expectations,
        suggestions: suggestions,
        recommend: recommend,
        IsItCompleted: "true"
      });
      setIsForm7("true")
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div>      
    <HeaderStudent />
    <div className="main-div">
      <div className="Fill-Forms-box">
        {isForm2Existing()}
      </div>
    <GuideNav />
    </div>
    <WebsiteFooter />
    </div>
  )
}

export default FillForms