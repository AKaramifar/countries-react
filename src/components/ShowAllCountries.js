import React from "react";
import "../components/ShowAllCountries.css";

const ShowAllCountries = () => {
  return (
    <div id="Div_ShowAllCountries_JSX" className="Div_ShowAllCountries_CSS">
      <div id="Div_SearchBar_JSX" className="Div_SearchBar_CSS">
        <div id="Div_SearchCountries_JSX" className="Div_SearchCountries_CSS">
          <i id="I_SearchIcon_JSX" className="I_SearchIcon_CSS fas fa-search" aria-hidden="true"></i>
          <input id="Input_Search_JSX" className="Input_Search_CSS" placeholder="Search for a country . . ."/>
        </div>
        <div id="Div_CountriesRegion_JSX" className="Div_CountriesRegion_CSS">
            <p id="P_SelectedRegion_JSX" className="P_SelectedRegion_CSS">All Region &nbsp;&nbsp;
                <i className="I_DownSymbol_CSS fas fa-sort-down" aria-hidden="true"></i>
            </p>

        </div>
      </div>
    </div>
  );
};

export default ShowAllCountries;
