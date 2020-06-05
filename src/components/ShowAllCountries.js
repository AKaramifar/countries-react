import React from "react";
import "../components/ShowAllCountries.css";

const ShowAllCountries = (props) => {
  let region = [];
  let regionIndex = [];
  let regionVisiblityState =  false;
  const selectBoxState = () => {
    regionVisiblityState ? regionVisiblityState = false : regionVisiblityState = true;
    document.getElementById("P_Region_JSX").style.display = !regionVisiblityState  ? "none" : "flex";
    regionIndex.forEach((region) => {
      document.getElementById("P_Region_" + region + "_JSX").style.display = !regionVisiblityState  ? "none" : "flex";
    })
  }
  const selectedRegoin = (e) => {
    document.getElementById("P_SelectedRegion_JSX").textContent = e;
  }
  return (
    <div id="Div_ShowAllCountries_JSX" className="Div_ShowAllCountries_CSS">
      <div id="Div_SearchBar_JSX" className="Div_SearchBar_CSS">
        <div id="Div_SearchCountries_JSX" className="Div_SearchCountries_CSS">
          <i id="I_SearchIcon_JSX" className="I_SearchIcon_CSS fas fa-search" aria-hidden="true"></i>
          <input id="Input_Search_JSX" className="Input_Search_CSS" placeholder="Search for a country . . ."/>
        </div>
        <div id="Div_CountriesRegion_JSX" className="Div_CountriesRegion_CSS" onClick={selectBoxState}>
            <p id="P_SelectedRegion_JSX" className="P_SelectedRegion_CSS">All Region</p>            
            <i className="I_DownSymbol_CSS fas fa-sort-down" aria-hidden="true"></i>
            <p id={"P_Region_JSX"} className="P_Region_CSS" onClick={(e)=> selectedRegoin(e.target.textContent)}>All Region</p>
            {
              props.data.sort((a, b) => a.region.localeCompare(b.region)).map((country, index) => {
                if(region.includes(country.region) || country.region === "") return null
                  region.push(country.region);
                  regionIndex.push(index);
                  return(
                    <p id={"P_Region_" + index + "_JSX"} className="P_Region_CSS" key={index} onClick={(e)=> selectedRegoin(e.target.textContent)}>{country.region}</p>
                  );
              })
            }
        </div>
      </div>
      <div id="Div_ShowCountries_JSX" className="Div_ShowCountries_CSS">

      </div>
    </div>
  );
};

export default ShowAllCountries;
