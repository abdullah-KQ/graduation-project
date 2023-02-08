import React from "react";
import { useState, useEffect } from "react";
import axios from "../../../../api/axios";
import HeaderStudent from "../../HeaderStudent";
import GuideNav from "../../GuideNav";
import WebsiteFooter from "../../../general/WebsiteFooter";
import "./SearchForOpportunity.css"
import ListCards from "./ListCards";

const URL = "Opportunity/";

const SearchForOpportunity = () => {
  const [card, setCard] = useState([]);
  const [searchResulte, setSearchResulte] = useState([]);

  const getData = async (e) => {
    try {
      const response = await axios.get(URL, {});
      setCard(response.data);
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
        card.Opport_name.includes(e.target.value) ||
        card.Description.includes(e.target.value) 
    );

    setSearchResulte(resultsArray);
  };
  return (
    <>
      <HeaderStudent />
      <div className="main-div">
        <div>
          <div className="Opp-box">
            <label htmlFor="search" className="search-label">
              : البحث عن فرصة تدريبية
            </label>
            <input
              type="search"
              id="search"
              className="search-for-Opp"
              onChange={handleSearchChange}
              placeholder=" البحث عن فرصة تدريبية "
            />
            <ListCards searchResulte={searchResulte} />
          </div>
        </div>
        <GuideNav />
      </div>
      <WebsiteFooter />
    </>
  );
};

export default SearchForOpportunity;
