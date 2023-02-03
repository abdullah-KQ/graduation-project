import React from "react";
import { useState, useEffect } from "react";
import axios from "../../../../api/axios";
import HeaderStudent from "../../HeaderStudent";
import GuideNav from "../../GuideNav";
import WebsiteFooter from "../../../general/WebsiteFooter";
import "../../PageContents.css";
import "./AddSupervisor.css";
import ListCards from "./ListCards";

const URL = "user/";

const AddSupervisor = () => {
  const [card, setCard] = useState([]);
  const [searchResulte, setSearchResulte] = useState([]);

  const getData = async (e) => {
    try {
      const response = await axios.get(URL, {});
      const Data =response.data.filter((Role)=>Role.Role=="2")
      setCard(Data);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getData()
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
    <div>
      <HeaderStudent />
      <div className="main-div">
        <div>
          <div className="form-box">
          <label htmlFor="username" className="search-label">
          : الرجاء ادخال معلومات المشرف 
          </label>
            <input
              type="search"
              id="search"
              className="search-for-Supervisor"
              onChange={handleSearchChange}
              placeholder=" الرجاء ادخال معلومات المشرف "
            />
            <ListCards searchResulte={searchResulte} />
          </div>
        </div>
        <GuideNav />
      </div>
      <WebsiteFooter />
    </div>
  );
};

export default AddSupervisor;
