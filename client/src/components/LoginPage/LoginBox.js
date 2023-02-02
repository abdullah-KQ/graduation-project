import React, { useContext } from "react";
import { useRef, useState, useEffect } from 'react';
import { Link,useNavigate  } from "react-router-dom";
import axios from "../../api/axios";
import "./LoginBox.css";
import "../general/general.css";
import imgTTF from "../img/Taibah Training Platform.png";
import  StudentContex  from "../../contex/StudentContex"
import  SupervisorContex  from "../../contex/SupervisorContex"
import  TrainingBodyContex  from "../../contex/TrainingBodyContex"


const LOGIN_user_URL="user/"
const LOGIN_student_URL="student/"
const LOGIN_Supervisor_URL="Supervisor/"
const LOGIN_TrainingBody_URL="TrainingBody/"

function LoginBox() {
  const {setStudentInfo} =useContext(StudentContex)
  const {setSupervisorInfo} =useContext(SupervisorContex)
  const {setTrainingBodyInfo} =useContext(TrainingBodyContex)
    
    const userRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setErrMsg('');
    }, [user, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.get(LOGIN_user_URL+user+"/"+password+"/",{});
            if(response){
              const response2 = await axios.get(LOGIN_user_URL+user+"/"+password+"/",{});
              const infuser = response2.data
              if(infuser.Role==="1"){
                const response3 = await axios.get(LOGIN_student_URL+user+"/",{});
                const infstudent = response3.data
                setStudentInfo({
                  UserName:infuser.UserName,
                  Fullname: infuser.Fullname ,
                  Phone_num: infuser.Phone_num ,
                  Email: infuser.Email  ,
                  Role: infuser.Role,
                  Uni_id: infstudent.Uni_id,
                  Department: infstudent.Department ,
                  College: infstudent.College,
                })
                navigate("/student");
              }

              else if(infuser.Role==="2"){
                  const response3 = await axios.get(LOGIN_Supervisor_URL+user+"/",{});
                  const infSupervisor = response3.data
                  setSupervisorInfo({
                    UserName:infuser.UserName,
                    Fullname: infuser.Fullname ,
                    Phone_num: infuser.Phone_num ,
                    Email: infuser.Email ,
                    Role: infuser.Role,
                    S_id: infSupervisor.S_id,
                    Department: infSupervisor.Department ,
                    College: infSupervisor.College,
                  })
                  navigate("/Supervisor");
              }

              else if(infuser.Role==="3"){
                  const response3 = await axios.get(LOGIN_TrainingBody_URL+user+"/",{});
                  const infTrainingBody = response3.data
                  setTrainingBodyInfo({
                    UserName:infuser.UserName,
                    Fullname: infuser.Fullname ,
                    Phone_num: infuser.Phone_num ,
                    Email: infuser.Email ,
                    Role: infuser.Role,
                    Website: infTrainingBody.Website,
                    Address: infTrainingBody.Address ,
                })
                    navigate("/TrainingBody");
              }
              else{
                setErrMsg("Registration Failed");
                setSuccess(true)
              }
            }
            }catch(err){
            if (!err?.response) {
                setErrMsg("No Server Response");
              } else if (err.response?.status === 404) {
                setErrMsg("wrong Username or password");
              } else {
                setErrMsg("Registration Failed");
              }
              setSuccess(true)
            }
        }

  return (
    <>
    {success ? (
                <div>
                  <div className="login-box">
                    <img src={imgTTF} className="logo-img" alt="imgTTF" />
                    {errMsg}
                  </div>
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
