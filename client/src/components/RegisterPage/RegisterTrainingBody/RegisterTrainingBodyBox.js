import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../general/general.css";
import "./RegisterTrainingBody.css";
import imgTTF from "../../img/Taibah Training Platform.png";
import axios from "../../../api/axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,24}$/;
const fullName_REGEX = /[a-zA-Zا-ي ]{3,100}$/;
const phoneNum_REGEX = /[0-9]{9,11}$/;
const email_REGEX = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const Website_REGEX = /^[a-zA-Z][a-zA-Z0-9.-_ ]{3,50}$/;
const Address_REGEX = /[a-zA-Z0-9.-_ا-ي ]{3,50}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
const User_URL = "user/";
const TrainingBody_URL = "TrainingBody/";

const RegisterTrainingBodyBox = () => {
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

  const [Website, setWebsite] = useState("");
  const [validWebsite, setValidWebsite] = useState(false);
  const [WebsiteFocus, setWebsiteFocus] = useState(false);

  const [Address, setAddress] = useState("");
  const [validAddress, setValidAddress] = useState(false);
  const [AddressFocus, setAddressFocus] = useState(false);

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
    setValidWebsite(Website_REGEX.test(Website));
  }, [Website]);

  useEffect(() => {
    setValidAddress(Address_REGEX.test(Address));
  }, [Address]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    const match = password === matchpassword;
    setValidMatchPassword(match);
  }, [password, matchpassword]);

  useEffect(() => {
    setErrMag("");
  }, [user, password, matchpassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(User_URL, {
        UserName: user,
        Fullname: fullName,
        Phone_num: phoneNum,
        Email: email,
        Password: password,
        Role: "3",
      });
      console.log(response);
      const response2 = await axios.post(TrainingBody_URL, {
        UserName: user,
        Website: Website,
        Address: Address,
      });
      console.log(response2);

      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMag("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMag("Username Taken");
      } else {
        //Registration Failed
        setErrMag("Username Taken");
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
              : اسم جهة التدريب
            </label>
            <input
              type="text"
              id="fullName"
              className="username"
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder=" : اسم جهة التدريب "
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

            <label htmlFor="Website" className="label-User">
              : الموقع الاكتروني
            </label>
            <input
              type="text"
              id="Website"
              className="username"
              onChange={(e) => setWebsite(e.target.value)}
              required
              placeholder=": الموقع الاكتروني "
              onFocus={() => setWebsiteFocus(true)}
            />
            <p
              className={
                WebsiteFocus && Website && !validWebsite
                  ? "instructions"
                  : "offscreen"
              }
            >
              . اضف الموقع الالكتروني
            </p>

            <label htmlFor="Address" className="label-User">
              : العنوان
            </label>
            <input
              type="text"
              id="Address"
              className="username"
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder=": العنوان"
              onFocus={() => setAddressFocus(true)}
            />
            <p
              className={
                AddressFocus && Address && !validAddress
                  ? "instructions"
                  : "offscreen"
              }
            >
              اضف العنوان
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
                !validName ||
                !validPassword ||
                !validMatchPassword ||
                !validfullName ||
                !validPhoneNum ||
                !validEmail ||
                !validAddress
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

export default RegisterTrainingBodyBox;
