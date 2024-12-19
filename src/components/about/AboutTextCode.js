import React from 'react';
import AboutText from './AboutText';
import AboutCode from './AboutCode';

const AboutTextCode = ({ activeCategorie }) => {
    return (
        <div className='about__container__infos__content'>
            <AboutText activeCategorie={activeCategorie} />
            <AboutCode activeCategorie={activeCategorie} />
        </div>
    );
};

export default AboutTextCode;