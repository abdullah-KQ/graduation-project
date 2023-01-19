import React, { Component } from "react";
import "./BodyStyles.css"
import "../general/general.css"
import imgTTF from "../img/Taibah Training Platform.png";

class LoginBox extends Component {

    render() {
        return (
            <div className="login-box">
                <img src={imgTTF} className="logo-img" alt="imgTTF" />
                <div>
                    <label htmlFor="username" className="username1">: اسم المستخدم</label>
                    <input type="text" className="username" name="username" minLength="8" required placeholder="اسم المستخدم" />
                </div>
                <div>
                    <label htmlFor="password">: كلمة المرور</label>
                    <input type="password" className="password" name="password" minLength="8" required placeholder="كلمة المرور" />
                </div>
                <input type="submit" value="تسجيل الدخول" />
            </div>
        );
    }
}

export default LoginBox;
