import React from 'react';

const ContactCode = ({ formData }) => {
    const lines = [
        <span>
            <span className='code__color__blue'>{'const'}</span>{' '}
            <span className='code__color__purple'>{'button'}</span>{' '}
            <span className='code__color__blue'>{'='}</span>{' '}
            <span className='code__color__purple'>{'document'}</span>
            <span>{'.'}</span>
            <span className='code__color__purple'>{'querySelector'}</span>
            <span>{'('}</span>
            <span className='code__color__orange'>{'"#sendBtn"'}</span>
            <span>{');'}</span>
        </span>,
        <span>{' '}</span>,
        <span>
            <span className='code__color__blue'>{'const'}</span>{' '}
            <span className='code__color__purple'>{'message'}</span>{' '}
            <span className='code__color__blue'>{'='}</span>{' '}
            <span>{'{'}</span>
        </span>,
        <span>
            &nbsp;&nbsp;
            <span className='code__color__blue'>{'nomPrenom'}</span>
            <span>{':'}</span>{' '}
            <span className='code__color__orange'>{`"${formData.name}"`}</span>
            <span>{','}</span>
        </span>,
        <span>
            &nbsp;&nbsp;
            <span className='code__color__blue'>{'email'}</span>
            <span>{':'}</span>{' '}
            <span className='code__color__orange'>{`"${formData.email}"`}</span>
            <span>{','}</span>
        </span>,
        <span>
            &nbsp;&nbsp;
            <span className='code__color__blue'>{'message'}</span>
            <span>{':'}</span>{' '}
            <span className='code__color__orange'>{`"${formData.message}"`}</span>
        </span>,
        <span>{'}'}</span>,
        <span>{' '}</span>,
        <span>
            <span className='code__color__purple'>{'button'}</span>
            <span>{'.'}</span>
            <span className='code__color__purple'>{'addEventListener'}</span>
            <span>{'('}</span>
            <span className='code__color__orange'>{'"click"'}</span>
            <span>{', () '}</span>
            <span className='code__color__blue'>{'=>'}</span>{' '}
            <span>{'{'}</span>
        </span>,
        <span>
            &nbsp;&nbsp;
            <span className='code__color__blue'>{'form'}</span>
            <span>{'.'}</span>
            <span className='code__color__blue'>{'send'}</span>
            <span>{'('}</span>
            <span className='code__color__blue'>{'message'}</span>
            <span>{');'}</span>
        </span>,
        <span>{'});'}</span>,
    ];

    return (
        <div className='contact__container__form__content__code'>
            <div className='contact__container__form__content__code__center'>
                {lines.map((line, index) => (
                    <div
                        key={index}
                        className='contact__container__form__content__code__container'
                    >
                        <div className='contact__container__form__content__code__container__line'>
                            <span>{index + 1}</span>
                        </div>
                        <div className='contact__container__form__content__code__container__text'>
                            {line}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactCode;