import React from 'react';

const AboutText = ({ activeCategorie }) => {
    return (
        <div className='about__container__infos__content__text'>
            <div className='about__container__infos__content__text__center'>
                <div className='about__container__infos__content__text__center__line'>
                    {Array.from({ length: 50 }).map((_, index) => (
                        <div key={index} className='number-line'>
                            <span>{index + 1}</span>
                            <span>*</span>
                        </div>
                    ))}
                </div>
                <div className='about__container__infos__content__text__center__content'>
                {Array.isArray(activeCategorie?.text) ? (
                    activeCategorie.text.map((line, index) => (
                        <p key={index}>
                            {line}
                            {activeCategorie?.section === 'Compétences' && index < activeCategorie.text.length - 1 && ' - '}
                            {activeCategorie?.key === 'interets' && index < activeCategorie.text.length - 1 && ' - '}
                        </p>
                    ))
                ) : (
                    <p>{activeCategorie?.text}</p>
                )}
                </div>
            </div>
        </div>
    );
};

export default AboutText;