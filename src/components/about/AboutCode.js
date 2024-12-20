import React from 'react';

const AboutCode = ({ activeCategorie }) => {
    const lines = [
        <span>
            <span className='code__color__blue'>{'const'}</span>{' '}
            <span className='code__color__purple'>{'AboutData'}</span>{' '}
            <span className='code__color__blue'>{'='}</span>{' '}
            <span>{'['}</span>
        </span>,
        <span>&nbsp;&nbsp;{'{'}</span>,
        <span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className='code__color__blue'>{'id'}</span>
            {': '}
            <span className='code__color__orange'>{`'${activeCategorie?.id}'`}</span>
            {','}
        </span>,
        <span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className='code__color__blue'>{'section'}</span>
            {': '}
            <span className='code__color__orange'>{`'${activeCategorie?.section}'`}</span>
            {','}
        </span>,
        <span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className='code__color__blue'>{'categorie'}</span>
            {': '}
            <span className='code__color__orange'>{`'${activeCategorie?.categorie}'`}</span>
            {','}
        </span>,
        <span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className='code__color__blue'>{'title'}</span>
            {': '}
            <span className='code__color__orange'>{`'${activeCategorie?.title}'`}</span>
            {','}
        </span>,
        <span>
            <div className='about__container__infos__content__code__container__text__group'>
                <span className='code__color__blue'>{'text'}</span>
                {': ['}
                {activeCategorie?.text?.map((line, index) => (
                    <span key={index} className='code__color__orange'>
                        {`"${line}"`}
                        {index < activeCategorie.text.length - 1 ? ',' : ''}
                    </span>
                ))}
                {']'}
            </div>
        </span>,
        <span>&nbsp;&nbsp;{'}'}</span>,
        <span>
            <span>{']'}</span>{';'}
        </span>,
        <span>
            <span className='code__color__blue'>{'export default'}</span>{' '}
            <span className='code__color__purple'>{'AboutData'}</span>{';'}
        </span>,
    ];

    return (
        <div className='about__container__infos__content__code'>
            <div className='about__container__infos__content__code__center'>
                {lines.map((line, index) => (
                    <div
                        key={index}
                        className='about__container__infos__content__code__container'
                    >
                        <div className='about__container__infos__content__code__container__line'>
                            <span>{index + 1}</span>
                        </div>
                        <div className='about__container__infos__content__code__container__text'>
                            {line}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutCode;