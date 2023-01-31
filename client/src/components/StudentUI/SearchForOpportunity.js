import React from "react";

const SearchForOpportunity = () => {
    const handleSubmit = (e) => e.preventDefault();

    const handleSearchChange = (e) => {}
  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="text"
        id="search"
        onChange={handleSearchChange}
      />
      <button className="search__button"></button>
    </form>
  );
};

export default SearchForOpportunity;
