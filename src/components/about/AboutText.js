import React from 'react';

const AboutText = ({ activeCategorie }) => {
    return (
        <div className='about__container__infos__content__text'>
            <div className='about__container__infos__content__text__center'>
                <p>{activeCategorie?.text}</p>
            </div>
        </div>
    );
};

export default AboutText;