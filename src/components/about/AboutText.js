import React from 'react';

const AboutText = ({ activeCategorie }) => {
    return (
        <div className='about__container__infos__content__text'>
            <div className='about__container__infos__content__text__center'>
                {Array.isArray(activeCategorie?.text) ? (
                    activeCategorie.text.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))
                ) : (
                    <p>{activeCategorie?.text}</p>
                )}
            </div>
        </div>
    );
};

export default AboutText;
