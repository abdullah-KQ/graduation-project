import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../general/general.css";
import "./RegisterSupervisor.css";
import imgTTF from "../../img/TTF.jpg";
import axios from "../../../api/axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,24}$/;
const fullName_REGEX = /[a-zA-Zا-ي ]{3,100}$/;
const phoneNum_REGEX = /[0-9]{9,11}$/;
const email_REGEX = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
const SId_REGEX = /[0-9]{1,30}$/;
const User_URL = "user/";
const Supervisor_URL = "Supervisor/";

const RegisterSupervisorBox = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [fullName, setFullName] = useState("");
  const [validfullName, setvalidFullName] = useState(false);
  const [fullNameFocus, setFullNameFocus] = useState(false);

  const [phoneNum, setPhoneNum] = useState("");
  const [validPhoneNum, setValidPhoneNum] = useState(false);
  const [phoneNumFocus, setPhoneNumFocus] = useState(false);

  const [email, setemail] = useState("");
  const [validEmail, setvalidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchpassword, setMatchPassword] = useState("");
  const [validMatchPassword, setValidMatchPassword] = useState(false);
  const [matchPasswordFocus, setMatchPasswordFocus] = useState(false);

  const [SId, setSId] = useState("");
  const [validSId, setvalidSId] = useState(false);
  const [SIdFocus, setSIdFocus] = useState(false);

  const [department, setDepartment] = useState("");
  const [validDepartment, setvalidDepartment] = useState(false);
  const [departmentFocus, setDepartmentFocus] = useState(false);

  const [college, setCollege] = useState("");
  const [validCollege, setvalidCollege] = useState(false);
  const [collegeFocus, setCollegeFocus] = useState(false);

  const [errMag, setErrMag] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setvalidFullName(fullName_REGEX.test(fullName));
  }, [fullName]);

  useEffect(() => {
    setValidPhoneNum(phoneNum_REGEX.test(phoneNum));
  }, [phoneNum]);

  useEffect(() => {
    setvalidEmail(email_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    const match = password === matchpassword;
    setValidMatchPassword(match);
  }, [password, matchpassword]);

  useEffect(() => {
    setvalidSId(SId_REGEX.test(SId));
  }, [SId]);

  useEffect(() => {
    if (department === "choose"){
      setvalidDepartment(false)
    }else{
      setvalidDepartment(true)
    }
  }, [department]);

  useEffect(() => {
    if (college === "choose"){
      setvalidCollege(false)
    }else{
      setvalidCollege(true)
    }
  }, [college]);

  useEffect(() => {
    setErrMag("");
  }, [user, password, matchpassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(User_URL,{
        UserName: user,
        Fullname: fullName,
        Phone_num: phoneNum,
        Email: email,
        Password: password,
        Role: "2",
      });
      console.log(response);
      const response2 = await axios.post(Supervisor_URL,{
        UserName: user,
        S_id: SId,
        Department: department,
        College: college,
      });
      console.log(response2);
      
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMag("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMag("Username Taken");
      } else {
        setErrMag("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
    {success ? (
      <div className="register-box">
        <img src={imgTTF} className="register-img" alt="imgTTF" />
        <div className="register-success">
          <p className="p-success">تم تسجيل الحساب بنجاح</p>
          <Link to="/">
            <button className="submit_button">سجل الدخول</button>
          </Link>
        </div>
      </div>
    ) : (
      <div className="register-box">
        <img src={imgTTF} className="register-img" alt="imgTTF" />
        <p ref={errRef} className={errMag ? "errmag" : "offscreen"}>
          {errMag}
        </p>
        <form onSubmit={handleSubmit} className="register-form">
          <label htmlFor="username" className="label-User">
            : اسم المستخدم
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            className="username"
            onChange={(e) => setUser(e.target.value)}
            required
            placeholder="اسم المستخدم"
            onFocus={() => setUserFocus(true)}
          />
          <p
            className={
              userFocus && user && !validName ? "instructions" : "offscreen"
            }
          >
            يجب ان يكون اسم الامستخدم بين 4 - 24 و يكون <br />
            . بالغه الإنجليزية وان يبدأ بحرف
            <br />
          </p>

          <label htmlFor="fullName" className="label-User">
            : الأسم الثلاثي
          </label>
          <input
            type="text"
            id="fullName"
            className="username"
            onChange={(e) => setFullName(e.target.value)}
            required
            placeholder=": الأسم الثلاثي"
            onFocus={() => setFullNameFocus(true)}
          />
          <p
            className={
              fullNameFocus && fullName && !validfullName
                ? "instructions"
                : "offscreen"
            }
          >
            يجب ان لا يحتوي الاسم على ارقام او رموز
          </p>

          <label htmlFor="phoneNum" className="label-User">
            : رقم الجوال
          </label>
          <input
            type="text"
            id="phoneNum"
            className="username"
            onChange={(e) => setPhoneNum(e.target.value)}
            required
            placeholder=": رقم الجوال "
            onFocus={() => setPhoneNumFocus(true)}
          />
          <p
            className={
              phoneNumFocus && phoneNum && !validPhoneNum
                ? "instructions"
                : "offscreen"
            }
          >
            يجب ان يحتوي الرقم على ارقام فقط
          </p>

          <label htmlFor="email" className="label-User">
            : البريد الكتروني
          </label>
          <input
            type="email"
            id="email"
            className="username"
            onChange={(e) => setemail(e.target.value)}
            required
            placeholder=": البريد الكتروني"
            onFocus={() => setEmailFocus(true)}
          />
          <p
            className={
              emailFocus && email && !validEmail
                ? "instructions"
                : "offscreen"
            }
          >
            الرجاء ادخال بريد اكتروني صحيح
          </p>

          <label htmlFor="password" className="label-password">
            : كلمة المرور
          </label>
          <input
            type="password"
            className="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocus(true)}
            required
            placeholder="كلمة المرور"
          />
          <p
            className={
              passwordFocus && password && !validPassword
                ? "instructions"
                : "offscreen"
            }
          >
            يجب ان تكون كلمة المرور بين 8 - 24 وان تحتوي على الاقل حرف <br />
            .من الأحرف الكبيرة و حرف من الاحرف الصغيرة ورقم
            <br />
          </p>

          <label
            htmlFor="confirm_password"
            className="label-confirm-password"
          >
            : تأكيد كلمة المرور
          </label>
          <input
            type="password"
            id="confirm_password"
            className="password"
            onChange={(e) => setMatchPassword(e.target.value)}
            required
            onFocus={() => setMatchPasswordFocus(true)}
            placeholder="تأكيد كلمة المرور "
          />
          <p
            className={
              matchPasswordFocus && matchpassword && !validMatchPassword
                ? "instructions"
                : "offscreen"
            }
          >
            . يجب ان تكون كلمة المرور مطابقة
          </p>

          <label htmlFor="SId" className="label-User">
              : الرقم الوظيفي
            </label>
            <input
              type="text"
              id="SId"
              className="username"
              onChange={(e) => setSId(e.target.value)}
              required
              placeholder=": رقم الجوال "
              onFocus={() => setSIdFocus(true)}
            />
            <p
              className={
                SIdFocus && SId && !validSId
                  ? "instructions"
                  : "offscreen"
              }
            >
              يجب ان يحتوي ارقام فقط
            </p>

          <label htmlFor="Department" className="label-User">
          : الكلية
          </label>
          <select
            id="Department"
            className="password"
            required
            onChange={(e) => setDepartment(e.target.value)}
            onFocus={() => setDepartmentFocus(true)}
          >
          <option value="choose"> -- اختر الكلية -- </option>
          <option value="cs" >
            cs
          </option>
          <option value="math">
          math
          </option>
          <option value="cs2">
          cs2
          </option>
          </select>
          <p
              className={
                department && departmentFocus && !validDepartment
                  ? "instructions"
                  : "offscreen"
              }
            >
              يجب اختيار الكلية 
            </p>

          <label htmlFor="college" className="label-User">
            : القسم
            </label>
            <select
              id="college"
              className="password"
              required
              onChange={(e) => setCollege(e.target.value)}
              onFocus={() => setCollegeFocus(true)}
            >
            <option value="choose"> -- اختر القسم -- </option>
            <option value="cs">
              cs
            </option>
            <option value="cs2" >
              cs2
            </option>
            <option value="cs3">
              cs3
            </option>
            </select>
            <p
              className={
                college && collegeFocus && !validCollege
                  ? "instructions"
                  : "offscreen"
              }
            >
              يجب اختيار القسم 
            </p>

          <button
            className="submit_button"
            disabled={
              !validName ||
              !validPassword ||
              !validMatchPassword ||
              !validfullName ||
              !validEmail ||
              !validPhoneNum ||
              !validDepartment ||
              !validSId ||
              !validCollege 
                ? true
                : false
            }
          >
            تسجيل الحساب
          </button>
        </form>
      </div>
    )}
  </>
);
};

export default RegisterSupervisorBox;
