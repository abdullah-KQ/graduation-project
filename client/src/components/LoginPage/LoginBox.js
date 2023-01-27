import React from "react";
import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import "./LoginBox.css";
import "../general/general.css";
import imgTTF from "../img/Taibah Training Platform.png";

const LOGIN_URL=""

function LoginBox() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(LOGIN_URL,{
                username:user,
                password:password
            });
            console.log(response);  
            setSuccess(true);
        }catch(err){
            if (!err?.response) {
                setErrMsg("No Server Response");
              } else if (err.response?.status === 409) {
                setErrMsg("Username Taken");
              } else {
                setErrMsg("Registration Failed");
              }
              errRef.current.focus();
            }
        }

    


  return (
    <>
    {success ? (
                <div>
                    {errMsg}
                </div>
            ) : (
    <div className="login-box">
      <img src={imgTTF} className="logo-img" alt="imgTTF" />
      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="username" className="label-User">
          : اسم المستخدم
        </label>
        <input
          type="text"
          className="username"
          ref={userRef}
          name="username"
          onChange={(e) => setUser(e.target.value)}
          required
          placeholder="اسم المستخدم"
        />
        <label htmlFor="password" className="label-password">: كلمة المرور</label>
        <input
          type="password"
          className="password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="كلمة المرور"
        />
      <input type="submit" className="submit_button" value="تسجيل الدخول" />
      </form>
      <div className="Need-an-Account">
      <p className="p-Need-an-Account">
        ليس لديك حساب؟ <br />
        <span>
        <Link to="/register">
            لتسجيل حساب 
        </Link>
        </span>
    </p>
    </div>
    </div>
    )}
    </>
  );
}

export default LoginBox;
