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
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [Fullname, setFullname] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone_num, setPhone_num] = useState('');
    const [Role, setRole] = useState('');

    const [Uni_id, setUni_id] = useState('');
  //>>>>shared
    const [Department, setDepartment] = useState('');
    const [College, setCollege] = useState('');
  //<<<<shared
    const [S_id, setS_id] = useState('');

    const [Website, setWebsite] = useState('');
    const [Address, setAddress] = useState('');



    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    
    useEffect(() => {
      setStudentInfo({
        UserName:user,
        Fullname: Fullname ,
        Phone_num: Phone_num ,
        Email: Email ,
        Role: Role,
        Uni_id: Uni_id,
        Department: Department ,
        College: College,
      })
    }, [setStudentInfo,user,Fullname,Phone_num,Email,Role,Uni_id,Department,College])

    useEffect(() => {
      setSupervisorInfo({
        UserName:user,
        Fullname: Fullname ,
        Phone_num: Phone_num ,
        Email: Email ,
        Role: Role,
        S_id: S_id,
        Department: Department ,
        College: College,
      })
    }, [setSupervisorInfo,user,Fullname,Phone_num,Email,Role,S_id,Department,College])

    useEffect(() => {
      setTrainingBodyInfo({
        UserName:user,
        Fullname: Fullname ,
        Phone_num: Phone_num ,
        Email: Email ,
        Role: Role,
        Website: Website,
        Address: Address ,
      })
    }, [setTrainingBodyInfo,user,Fullname,Phone_num,Email,Role,Website,Address])

    useEffect(() => {
        setErrMsg('');
    }, [user, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.get(LOGIN_user_URL+user+"/"+password+"/",{});
            if(response){
              console.log("The response is successful")
            }
            if(response){
             try{
              const response2 = await axios.get(LOGIN_user_URL+user+"/"+password+"/",{
              });
              if(response2){
                console.log("The response 2 is successful")
              }
              const infuser = response2.data
              setUser(infuser.UserName)
              setFullname(infuser.Fullname)
              setEmail(infuser.Email)
              setPhone_num(infuser.Phone_num)
              setRole(infuser.Role)


              if(infuser.Role==="1"){
                try{
                const response3 = await axios.get(LOGIN_student_URL+user+"/",{
                });
                const infstudent = response3.data
                setUni_id(infstudent.setUni_id)
                setDepartment(infstudent.Department)
                setCollege(infstudent.College)
                navigate("/student");
              }catch(err){
                if (!err?.response3) {
                  setErrMsg("No Server Response");
                } else if (err.response?.status === 409) {
                  setErrMsg("Username Taken");
                } else {
                  setErrMsg("Registration Failed");
                }
                errRef.current.focus();
              }
              }


              else if(infuser.Role==="2"){
                try{
                  const response3 = await axios.get(LOGIN_Supervisor_URL+user+"/",{
                  });
                  const infstudent = response3.data
                  setS_id(infstudent.S_id)
                  setDepartment(infstudent.Department)
                  setCollege(infstudent.College)
                  navigate("/Supervisor");
                }catch(err){
                  if (!err?.response3) {
                    setErrMsg("No Server Response");
                  } else if (err.response?.status === 409) {
                    setErrMsg("Username Taken");
                  } else {
                    setErrMsg("Registration Failed");
                  }
                  errRef.current.focus();
                }
              }


              else if(infuser.Role==="3"){
                try{
                  const response3 = await axios.get(LOGIN_TrainingBody_URL+user+"/",{
                  });
                  const infstudent = response3.data
                  setWebsite(infstudent.Website)
                  setAddress(infstudent.Address)
                  navigate("/TrainingBody");
                }catch(err){
                  if (!err?.response3) {
                    setErrMsg("No Server Response");
                  } else if (err.response?.status === 409) {
                    setErrMsg("Username Taken");
                  } else {
                    setErrMsg("Registration Failed");
                  }
                  errRef.current.focus();
                }
              }
             }catch(err){
              if (!err?.response2) {
                setErrMsg("No Server Response");
              } else if (err.response?.status === 409) {
                setErrMsg("Username Taken");
              } else {
                setErrMsg("Registration Failed");
              }
              errRef.current.focus();
            }
            }


            setSuccess(true);
        }catch(err){
            if (!err?.response) {
                setErrMsg("No Server Response");
              } else if (err.response?.status === 409) {
                setErrMsg("Username Taken");
              } else {
                setErrMsg("Registration Failed");
              }
              //errRef.current.focus();
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
