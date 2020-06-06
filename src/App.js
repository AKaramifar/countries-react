import React, { useState, useEffect } from "react";
import './App.css';
import FadeIn from 'react-fade-in';
import Header from "./components/Header.js";
import ShowAllCountries from "./components/ShowAllCountries.js";
import FullViewOfCountry from "./components/FullViewOfCountry.js";

function App() {
  const [countriesInfo, setData] = useState([]);
  const [view, setView] = useState("Small View");
  const [country, setCountry] = useState("");
  const [theme, setTheme] = useState("Dark Mode")
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
    console.log(countryName)
    setCountry(countryName);
    setView("Full View");
  };
  const themeSwither = () => {
    if(theme === "Dark Mode"){
      document.documentElement.style.setProperty('--main-bg-color', '#fafafa');
      document.documentElement.style.setProperty('--second-bg-color', '#ffffff');
      document.documentElement.style.setProperty('--text-color', '#111517');
      document.documentElement.style.setProperty('--box-shadow', 'rgba(153, 153, 153, 0.7)');
      document.documentElement.style.setProperty('--box-shadow-card', '#dcdcdc');
      document.documentElement.style.setProperty('--menu-item-hover-bg-color', '#fafafa');
      document.getElementById("I_ThemeSwitvher_JSX").classList = "I_ThemeSwitvher_CSS far fa-moon";
      setTheme("Light Mode");
    }
    else{
      document.documentElement.style.setProperty('--main-bg-color', '#202c37');
      document.documentElement.style.setProperty('--second-bg-color', '#2b3945');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--box-shadow', '#0b0f12');
      document.documentElement.style.setProperty('--box-shadow-card', '#262626');
      document.documentElement.style.setProperty('--menu-item-hover-bg-color', '#36434f');
      document.getElementById("I_ThemeSwitvher_JSX").classList = "I_ThemeSwitvher_CSS far fa-sun";
      setTheme("Dark Mode");
    }
  }
  return (
    <FadeIn id="Div_App_JSX" className="Div_App_CSS">
      <Header theme={themeSwither} />
      <div id="Div_Main_JSX" className="Div_Main_CSS">
        {view === "Small View" ? (
          <ShowAllCountries
            data={countriesInfo}
            changeview={changeView}
            countryToFullView={countryToShow}
          />
        ) : (
          <FullViewOfCountry
            data={countriesInfo}
            countryToFullView={countryToShow}
            countryFullView={country}
            changeview={changeView}
          />
        )}
      </div>
    </FadeIn>
  );
}

export default App;
