import React from "react";
import HeaderStudent from "../HeaderStudent";
import GuideNav from "../GuideNav";
import WebsiteFooter from "../../general/WebsiteFooter";

const SearchForOpportunity = () => {
    const handleSubmit = (e) => e.preventDefault();

    const handleSearchChange = (e) => {}
  return (
    <>
    <HeaderStudent />
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="text"
        id="search"
        onChange={handleSearchChange}
      />
      <button className="search__button"></button>
    </form>
    <GuideNav />
    <WebsiteFooter />
    </>
  );
};

export default SearchForOpportunity;
