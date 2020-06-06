import React from "react";
import FadeIn from 'react-fade-in';
import "../components/FullViewOfCountry.css";

const FullViewOfCountry = (props) => {
  return (
    <FadeIn id="Div_FullViewOfCountry_JSX" className="Div_FullViewOfCountry_CSS">
      {props.data
        .filter((country) => country.name === props.countryFullView)
        .map((country, index) => {
          return (
            <div key={index}>
              {console.log(country)}
              <div id="Div_BackButton_JSX" className="Div_BackButton_CSS">
                <p
                  id="P_BackButton_CSS"
                  className="P_BackButton_CSS"
                  onClick={() => props.changeview("Small View")}
                >
                  <i
                    className="I_BackButton_CSS fas fa-long-arrow-alt-left"
                    aria-hidden="true"
                  ></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;Back
                </p>
              </div>
              <div
                id="Div_CountryFullDetiel_JSX"
                className="Div_CountryFullDetiel_CSS"
              >
                <img
                  id="Img_CountryImageFullView_JSX"
                  className="Img_CountryImageFullView_CSS"
                  src={country.flag}
                  alt="Flag"
                ></img>
                <div
                  id="Div_CountryDetiel_JSX"
                  className="Div_CountryDetiel_CSS"
                >
                  <div
                    id="Div_CountryNameFullView_JSX"
                    className="Div_CountryNameFullView_CSS"
                  >
                    <p
                      id="P_CountryNameFullView_JSX"
                      className="P_CountryNameFullView_CSS"
                    >
                      {country.name}
                    </p>
                  </div>
                  <div
                    id="Div_CountryDetielFirstChildFullView_JSX"
                    className="Div_CountryDetielFirstChildFullView_CSS"
                  >
                    <div
                      id="Div_CountryDetielFirstChild_01_FullView_JSX"
                      className="Div_CountryDetielFirstChild_01_FullView_CSS"
                    >
                      <p
                        id="P_CountryNativeNameFullView_JSX"
                        className="P_CountryNativeNameFullView_CSS"
                      >
                        <strong>Native Name:</strong> {country.nativeName}
                      </p>
                      <p
                        id="P_CountryPopulationFullView_JSX"
                        className="P_CountryPopulationFullView_CSS"
                      >
                        <strong>Population:</strong> {country.population}
                      </p>
                      <p
                        id="P_CountryRegionFullView_JSX"
                        className="P_CountryRegionFullView_CSS"
                      >
                        <strong>Regoin:</strong> {country.region}
                      </p>
                      <p
                        id="P_CountryCapitaFullView_JSX"
                        className="P_CountryCapitaFullView_CSS"
                      >
                        <strong>Capital:</strong> {country.capital}
                      </p>
                    </div>
                    <div
                      id="Div_CountryDetielFirstChild_02_FullView_JSX"
                      className="Div_CountryDetielFirstChild_02_FullView_CSS"
                    >
                      <p
                        id="P_CountryTopLevelDomainFullView_JSX"
                        className="P_CountryTopLevelDomainFullView_CSS"
                      >
                        <strong>Top Level Domain:</strong>{" "}
                        {country.topLevelDomain.join()}
                      </p>
                      <p
                        id="P_CountryCurrenciesFullView_JSX"
                        className="P_CountryCurrenciesFullView_CSS"
                      >
                        <strong>Currencies:</strong>{" "}
                        {country.currencies[0].name}
                      </p>
                      <p
                        id="P_CountryLanguageFullView_JSX"
                        className="P_CountryLanguageFullView_CSS"
                      >
                        <strong>Languages:</strong>{" "}
                        {country.languages.map((el) => el.name).join(" , ")}
                      </p>
                    </div>
                  </div>
                  <div
                    id="Div_CountryDetailContainerSecondChildFullView_JSX"
                    className="Div_CountryDetailContainerSecondChildFullView_CSS"
                  >
                    <p
                      id="P_CountryBorderCountriesFullView_JSX"
                      className="P_CountryBorderCountriesFullView_CSS"
                    >
                      <strong>Border Countries:</strong>
                    </p>
                    {props.data
                      .filter((countries) =>
                        country.borders.includes(countries.alpha3Code)
                      )
                      .map((Countries, index) => {
                        return (
                          <p
                            id="P_CountryBorder_JSX"
                            className="P_CountryBorder_CSS "
                            key={index}
                            onClick={() =>
                              props.countryToFullView(Countries.name)
                            }
                          >
                            {console.log(Countries.alpha3Code)}
                            {console.log(country.borders)}
                            {Countries.name}
                          </p>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </FadeIn>
  );
};

export default FullViewOfCountry;
