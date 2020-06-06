import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import ShowAllCountries from "./components/ShowAllCountries.js";
import FullViewOfCountry from "./components/FullViewOfCountry.js"

function App() {
  const [countriesInfo, setData] = useState([]);
  const [view, setView] = useState("Small View");
  const [country, setCountry] = useState("");
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const changeView = (viewType) => {
    setView(viewType);
  };
  const countryToShow = (countryName) => {
    setCountry(countryName);
    setView("Full View");
  };
  return (
    <div id="Div_App_JSX" className="Div_App_CSS">
      <Header />
      <div id="Div_Main_JSX" className="Div_Main_CSS">
        {
          view === "Small View" ? <ShowAllCountries data={countriesInfo} changeview={changeView} countryToFullView={countryToShow}/> : <FullViewOfCountry data={countriesInfo} countryToFullView={countryToShow} countryFullView={country} changeview={changeView}/>
        }
      </div>
    </div>
  );
}

export default App;
