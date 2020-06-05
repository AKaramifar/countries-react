import React from "react";
import "../components/Search.css";

const Search = (props) => {
  return (
    <div id="Div_SearchCountries_JSX" className="Div_SearchCountries_CSS">
      <i
        id="I_SearchIcon_JSX"
        className="I_SearchIcon_CSS fas fa-search"
        aria-hidden="true"
      ></i>
      <input
        id="Input_Search_JSX"
        className="Input_Search_CSS"
        placeholder="Search for a country . . ."
        onChange={(e) => props.search(e.target.value)}
      />
    </div>
  );
};

export default Search;
