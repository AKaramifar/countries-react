import React from "react";
import "../components/Header.css";

const Header = (props) => {
  return (
    <div id="Div_Header_JSX" className="Div_Header_CSS">
      <p id="P_TitleQuestion_JSX" className="P_TitleQuestion_CSS">
        Where in the world?
      </p>
      <div id="Div_ThemeSwitcher_JSX" className="Div_ThemeSwitcher_CSS" onClick={props.theme}>
        <i id="I_ThemeSwitvher_JSX" className="I_ThemeSwitvher_CSS far fa-sun" aria-hidden="true"></i>
        <p
          id="P_ThemeSwitcher_JSX"
          className="P_ThemeSwitcher_CSS"
        >
          Light Mode
        </p>
      </div>
    </div>
  );
};

export default Header;
