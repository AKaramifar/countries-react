import React, { useState, useEffect } from "react";
import "../components/ShowAllCountries.css";
import Search from "../components/Search.js";
import Region from "../components/Region.js";
import CountriesCard from "./CountriesCard";

const ShowAllCountries = (props) => {
  const [countryCard, setCountryCard] = useState(props.data);
  const [region, setRegion] = useState("All Region");

  useEffect(() => {
    setCountryCard(props.data);
  }, [props.data]);

  const selectedRegoin = (e) => {
    setRegion(e);
    setCountryCard(
      e !== "All Region"
        ? props.data.filter((country) => country.region === e)
        : props.data
    );
    document.getElementById("P_SelectedRegion_JSX").textContent = e;
  };

  const searchCountry = (e) => {
    if (e !== "") {
      setCountryCard(
        region !== "All Region"
          ? props.data.filter(
              (country) =>
                country.name.toLowerCase().indexOf(e.toLowerCase()) > -1 &&
                country.region === region
            )
          : props.data.filter(
              (country) =>
                country.name.toLowerCase().indexOf(e.toLowerCase()) > -1
            )
      );
    } else {
      setCountryCard(
        region !== "All Region"
          ? props.data.filter((country) => country.region === region)
          : props.data
      );
    }
  };
  return (
    <div id="Div_ShowAllCountries_JSX" className="Div_ShowAllCountries_CSS">
      <div id="Div_SearchBar_JSX" className="Div_SearchBar_CSS">
        <Search search={searchCountry} />
        <Region data={props.data} selectRegoin={selectedRegoin} />
      </div>
      <CountriesCard
        countryToFullView={props.countryToFullView}
        country={countryCard}
      />
    </div>
  );
};

export default ShowAllCountries;
