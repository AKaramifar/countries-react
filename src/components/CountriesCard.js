import React from 'react';
import '../components/CountriesCard.css';
const CountriesCard = (props) => {
  return (
    <div id="Div_ShowCountries_JSX" className="Div_ShowCountries_CSS">
      {props.country
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((country, index) => {
          return (
            <div
              id={"Div_SmallCard_" + index + "_JSX"}
              className="Div_SmallCard_CSS"
              key={"SmallCardCountry_" + index}
            >
              <img
                id={"Img_SmallCardCountryFlag_" + index + "_JSX"}
                className="Img_SmallCardCountryFlag_CSS"
                src={country.flag}
                alt="Flag"
              />
              <p
                id={"P_SmallCardName_" + index + "_JSX"}
                className="P_SmallCardName_CSS"
              >
                <strong className="Strong_SmallCardText_CSS">
                  {country.name}
                </strong>
              </p>
              <p
                id={"P_SmallCardPopulation" + index + "_JSX"}
                className="P_SmallCardPopulation_CSS"
              >
                <strong className="Strong_SmallCardText_CSS">
                  Population: &nbsp;
                </strong>
                {country.population}
              </p>
              <p
                id={"P_SmallCardRegion" + index + "_JSX"}
                className="P_SmallCardRegion_CSS"
              >
                <strong className="Strong_SmallCardText_CSS">
                  Region: &nbsp;
                </strong>
                {country.region || "-"}
              </p>
              <p
                id={"P_SmallCardCapital" + index + "_JSX"}
                className="P_SmallCardCapital_CSS"
              >
                <strong className="Strong_SmallCardText_CSS">
                  Capital: &nbsp;
                </strong>
                {country.capital || "-"}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default CountriesCard;
