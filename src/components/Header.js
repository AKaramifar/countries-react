import React from 'react';
import '../components/Header.css'

const Header = () => {
    return(
        <div id="Div_Header_JSX" className="Div_Header_CSS">
            <p id="P_TitleQuestion_JSX" className="P_TitleQuestion_CSS">Where in the world?</p>
            <p id="P_ThemeSwitcher_JSX" class="P_ThemeSwitcher_CSS"><i class="far fa-sun" aria-hidden="true"></i> Light Mode</p>

        </div>
    );
}

export default Header;