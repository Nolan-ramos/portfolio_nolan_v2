import React from 'react';

const AboutText = ({ activeCategorie }) => {
    return (
        <div className='about__container__infos__content__text'>
            <div className='about__container__infos__content__text__center'>
                <div className='about__container__infos__content__text__center__line'>
                    {Array.from({ length: 50 }).map((_, index) => (
                        <div key={index}>
                            <span>{index + 1}</span>
                            <span>{index === 0 ? '/' : '*'}</span>
                        </div>
                    ))}
                </div>
                <div className='about__container__infos__content__text__center__content'>
                    <p className='about__container__infos__content__text__center__content__comment'>{`**`}</p>
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
                    <p className='about__container__infos__content__text__center__content__comment'>{`*/`}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutText;