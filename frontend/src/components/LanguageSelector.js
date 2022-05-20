import React from 'react';
import { withTranslation } from 'react-i18next';
import { changeLanguage } from '../api/apiCalls';
import tr from '../assets/TR.png'
import en from '../assets/EN.png'
const LanguageSelector = (props) => {

    const onChangeLanguage = language => {
        const { i18n } = props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    }

    return (
        <div className="container">
            <div>
                <img src={tr} width="40" alt="TR" onClick={() => onChangeLanguage('tr')}></img>
                <img src={en} alt="Us" width="40" onClick={() => onChangeLanguage('en')}></img>

            </div>
        </div>
    );
};

export default withTranslation()(LanguageSelector);