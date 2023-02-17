import React from "react";
import { useState, useEffect, useContext } from "react";
import HeaderSupervisor from "../../HeaderSupervisor";
import GuideNav from "../../GuideNav";
import WebsiteFooter from "../../../general/WebsiteFooter";
import "./AddSuperviseStudents.css";
import ListCards from "./ListCards";
import axios from "../../../../api/axios";
import SupervisorContex from "../../../../contex/SupervisorContex";

const URL = "user/";

const AddSuperviseStudents = () => {
  const [card, setCard] = useState([]);
  const [searchResulte, setSearchResulte] = useState([]);
  const [success, setSuccess] = useState(false);

  const { SupervisorInfo } = useContext(SupervisorContex);

  const getData = async (e) => {
    try {
      const response = await axios.get(URL, {});
      const Data = response.data.filter((Role) => Role.Role == "1");
      setCard(Data);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getData();
    if (SupervisorInfo.Verified == "false") {
      setSuccess(false);
    }
  }, []);

  const handleSearchChange = (e) => {
    const resultsArray = card.filter(
      (card) =>
        card.Fullname.includes(e.target.value) ||
        card.UserName.includes(e.target.value) ||
        card.Email.includes(e.target.value)
    );

    setSearchResulte(resultsArray);
  };

  return (
    <>
      {success ? (
        <>
          <HeaderSupervisor />
          <div className="main-div">
            <div className="form-box">
              <p className="p-Not-Success">
                الرجاء توثيق الحساب للوصول للخدمات المقدمة
              </p>
            </div>
            <GuideNav />
            
          </div>
          <WebsiteFooter />
        </>
      ) : (
        <div>
          <HeaderSupervisor />
          <div className="main-div">
            <div>
              <div className="form-box">
                <label htmlFor="username" className="search-label">
                  : الرجاء ادخال معلومات الطالب
                </label>
                <input
                  type="search"
                  id="search"
                  className="search-for-Students"
                  onChange={handleSearchChange}
                  placeholder=" الرجاء ادخال معلومات الطالب "
                />
                <ListCards searchResulte={searchResulte} />
              </div>
            </div>
            <GuideNav />
          </div>
          <WebsiteFooter />
        </div>
      )}
    </>
  );
};

export default AddSuperviseStudents;
