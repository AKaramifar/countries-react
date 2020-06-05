import React from 'react';
import '../components/FullViewOfCountry.css';

const FullViewOfCountry = (props) => {
    return(
        <div id="Div_FullViewOfCountry_JSX" className="Div_FullViewOfCountry_CSS">
            <div id="Div_BackButton_JSX" className="Div_BackButton_CSS">
                <p id="P_BackButton_CSS" className="P_BackButton_CSS">
                    <i className="I_BackButton_CSS fas fa-long-arrow-alt-left" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Back
                </p>
            </div>
            <div id="Div_CountryFullDetiel_JSX" className="Div_CountryFullDetiel_CSS">
                <img id="Img_CountryImageFullView_JSX" className="Img_CountryImageFullView_CSS" src="https://restcountries.eu/data/ago.svg" alt="Flag"></img>
                <div id="Div_CountryDetiel_JSX" className="Div_CountryDetiel_CSS">
                    <div id="Div_CountryNameFullView_JSX" className="Div_CountryNameFullView_CSS">
                        <p id="P_CountryNameFullView_JSX" className="P_CountryNameFullView_CSS">Angola</p>
                    </div>
                    <div id="Div_CountryDetielFirstChildFullView_JSX" className="Div_CountryDetielFirstChildFullView_CSS">
                        <div id="Div_CountryDetielFirstChild_01_FullView_JSX" className="Div_CountryDetielFirstChild_01_FullView_CSS">
                            <p id="P_CountryNativeNameFullView_JSX" className="P_CountryNativeNameFullView_CSS"><strong>Native Name:</strong> Angola</p>
                            <p id="P_CountryPopulationFullView_JSX" className="P_CountryPopulationFullView_CSS"><strong>Population:</strong> 25868000</p>
                            <p id="P_CountryRegionFullView_JSX" className="P_CountryRegionFullView_CSS"><strong>Regoin:</strong> Africa</p>                            
                            <p id="P_CountryCapitaFullView_JSX" className="P_CountryCapitaFullView_CSS"><strong>Capital:</strong> Luanda</p>                            
                        </div>
                        <div id="Div_CountryDetielFirstChild_02_FullView_JSX" className="Div_CountryDetielFirstChild_02_FullView_CSS">
                            <p id="P_CountryTopLevelDomainFullView_JSX" className="P_CountryTopLevelDomainFullView_CSS"><strong>Top Level Domain:</strong> .ao</p>
                            <p id="P_CountryCurrenciesFullView_JSX" className="P_CountryCurrenciesFullView_CSS"><strong>Currencies:</strong> Angolan kwanza</p>
                            <p id="P_CountryLanguageFullView_JSX" className="P_CountryLanguageFullView_CSS"><strong>Languages:</strong> Portuguese</p>
                        </div>
                    </div>
                    <div id="Div_CountryDetailContainerSecondChildFullView_JSX" className="Div_CountryDetailContainerSecondChildFullView_CSS">
                        <p id="P_CountryBorderCountriesFullView_JSX" className="P_CountryBorderCountriesFullView_CSS"><strong>Border Countries:</strong></p>
                        <p id="contry_6_border_0_P_JS" class="P_CountryBorder_CSS ">Congo</p>
                        <p id="contry_6_border_1_P_JS" class="P_CountryBorder_CSS ">Congo (Democratic Republic of the)</p>
                        <p id="contry_6_border_2_P_JS" class="P_CountryBorder_CSS ">Zambia</p>
                        <p id="contry_6_border_3_P_JS" class="P_CountryBorder_CSS ">Namibia</p>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullViewOfCountry;