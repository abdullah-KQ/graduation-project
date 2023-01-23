import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../general/general.css";
import "./RegisterStudent.css";
import imgTTF from "../../img/Taibah Training Platform.png";
//import axios from "../../../api/axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,24}$/;
const fullName_REGEX = /[a-zA-Zا-ي ]{3,100}$/;
const email_REGEX = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
//const REGISTER_URL = "/register";

const RegisterStudentBox = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [fullName, setFullName] = useState("");
  const [validfullName, setvalidFullName] = useState(false);
  const [fullNameFocus, setFullNameFocus] = useState(false);

  const [email, setemail] = useState("");
  const [validEmail, setvalidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchpassword, setMatchPassword] = useState("");
  const [validMatchPassword, setValidMatchPassword] = useState(false);
  const [matchPasswordFocus, setMatchPasswordFocus] = useState(false);

  const [errMag, setErrMag] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
    //to Print the data in console --- delete it after activate post function
    console.log(user);
  }, [user]);

  useEffect(() => {
    setvalidFullName(fullName_REGEX.test(fullName));
    //to Print the data in console --- delete it after activate post function
    console.log(fullName);
  }, [fullName]);

  useEffect(() => {
    setvalidEmail(email_REGEX.test(email));
    //to Print the data in console --- delete it after activate post function
    console.log(email);
  }, [email]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    const match = password === matchpassword;
    setValidMatchPassword(match);
    //to Print the data in console --- delete it after activate post function
    console.log(password);
    console.log(matchpassword);
  }, [password, matchpassword]);

  useEffect(() => {
    setErrMag("");
  }, [user, password, matchpassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //to Print the data in console --- delete it after activate post function >>>>>
    console.log("user :" + user);
    console.log("fullName :" + fullName);
    console.log("email :" + email);
    console.log("password :" + password);
    console.log("matchpassword :" + matchpassword);
    // <<<<<
    setSuccess(true);
    /*
        const respnse = await axios.post(REGISTER_URL,
            JSON.stringify({
            username : user, 
            password 
            }),
            {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
            }
        );
        setSuccess(true)
    }catch (err) {
        if (!err?.response) {
            setErrMag('No Server Response');
        } else if (err.response?.status === 409) {
            setErrMag('Username Taken');
        } else {
            setErrMag('Registration Failed')
        }
        errRef.current.focus();
    }
    */
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
          <p
            ref={errRef}
            className={errMag ? "errmag" : "offscreen"}
            aria-live="assertive"
          >
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
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
            />
            <p
              id="uidnote"
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
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPasswordFocus(true)}
              required
              placeholder="كلمة المرور"
            />
            <p
              id="pwdnote"
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
              aria-invalid={validMatchPassword ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchPasswordFocus(true)}
              placeholder="تأكيد كلمة المرور "
            />
            <p
              id="confirmnote"
              className={
                matchPasswordFocus && matchpassword && !validMatchPassword
                  ? "instructions"
                  : "offscreen"
              }
            >
              . يجب ان تكون كلمة المرور مطابقة
            </p>

            <button
              className="submit_button"
              disabled={
                !validName || !validPassword || !validMatchPassword ||!validfullName ||!validEmail
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

export default RegisterStudentBox;
