import React, {useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import ShowAllCountries from "./components/ShowAllCountries.js";

function App() {
  const[countriesInfo, setData] = useState([]);
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
      console.log(data)
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);
  return (
    <div id="Div_App_JSX" className="Div_App_CSS">
      <Header />
      <div id="Div_Main_JSX" className="Div_Main_CSS">
        <ShowAllCountries data={countriesInfo}/>
        {/* <FullViewOfCountry /> */}
      </div>
    </div>
  );
}

export default App;
