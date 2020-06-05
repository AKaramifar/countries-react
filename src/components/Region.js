import React from 'react';
import '../components/Region.css'

const Region = (props) => {
  let regionArray = [];
  let regionIndex = [];
  let regionVisiblityState = false;
  const selectBoxState = () => {
    regionVisiblityState ? regionVisiblityState = false : regionVisiblityState = true;
    document.getElementById("P_Region_JSX").style.display = !regionVisiblityState  ? "none" : "flex";
    regionIndex.forEach((region) => {
      document.getElementById("P_Region_" + region + "_JSX").style.display = !regionVisiblityState  ? "none" : "flex";
    })
  }
  return (
    <div
      id="Div_CountriesRegion_JSX"
      className="Div_CountriesRegion_CSS"
      onClick={selectBoxState}
    >
      <p id="P_SelectedRegion_JSX" className="P_SelectedRegion_CSS">
        All Region
      </p>
      <i className="I_DownSymbol_CSS fas fa-sort-down" aria-hidden="true"></i>
      <p
        id={"P_Region_JSX"}
        className="P_Region_CSS"
        onClick={(e) => props.selectRegoin(e.target.textContent)}
      >
        All Region
      </p>
      {props.data.sort((a, b) => a.region.localeCompare(b.region)).map((country, index) => {
          if (regionArray.includes(country.region) || country.region === "")
            return null;
          regionArray.push(country.region);
          regionIndex.push(index);
          return (
            <p
              id={"P_Region_" + index + "_JSX"}
              className="P_Region_CSS"
              key={"Region_" + index}
              onClick={(e) => props.selectRegoin(e.target.textContent)}
            >
              {country.region}
            </p>
          );
        })}
    </div>
  );
};

export default Region;