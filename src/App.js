import React from "react";
import "./App.css";
import Header from './components/Header.js';
import ShowAllCountries from './components/ShowAllCountries.js';

function App() {
  return (
    <div id="Div_App_JSX" className="Div_App_CSS">
      <Header />
      <div id="Div_Main_JSX" className="Div_Main_CSS">
        <ShowAllCountries />
        {/* <FullViewOfCountry /> */}
      </div>
    </div>
  );
}

export default App;
