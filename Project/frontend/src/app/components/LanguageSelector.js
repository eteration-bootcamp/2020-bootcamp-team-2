import React from 'react';
import { withTranslation } from 'react-i18next';
import { changeLanguage } from '../../api/apiCalls';

const LanguageSelector = (props) => {
    const onChangeLanguage = language => {
        const { i18n } = props;
        i18n.changeLanguage(language);
        changeLanguage(language);

    };
    return (
        <div className = "container">
            <img src ="https://www.countryflags.io/tr/shiny/24.png" alt="Turkısh Flag" onClick={() => onChangeLanguage('tr')} style={{ cursor: 'pointer', marginRight: "10px" }}></img>
            <img src="https://www.countryflags.io/us/shiny/24.png" alt= "USA Flag" onClick={() => onChangeLanguage('en')} style={{ cursor: 'pointer' }}></img>              
        </div>
    );
};

export default withTranslation()(LanguageSelector);