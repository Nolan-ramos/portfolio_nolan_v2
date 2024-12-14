import React from 'react';

const ContactCode = ({ formData }) => {
    return (
        <div className="contact__container__form__content__code">
            <div className='contact__container__form__content__code__center'>
                <div className='contact__container__form__content__code__container'>
                    <div className='contact__container__form__content__code__container__line'>
                        <span>1</span>
                    </div>
                    <div className='contact__container__form__content__code__container__text'>
                        <span className='code__color__blue'>{'const'}</span>
                        &nbsp;
                        <span className='code__color__purple'>{'button'}</span>
                        &nbsp;
                        <span className='code__color__blue'>{'='}</span>
                        &nbsp;
                        <span className='code__color__purple'>{'document'}</span>
                        <span>{'.'}</span>
                        <span className='code__color__purple'>{'querySelector'}</span>
                        <span>{'('}</span>
                        <span className='code__color__orange'>{'"#sendBtn"'}</span>
                        <span>{')'};</span>
                    </div>
                </div>
                <div className='contact__container__form__content__code__container'>
                    <div className='contact__container__form__content__code__container__line'>
                        <span>2</span>
                    </div>
                    <div className='contact__container__form__content__code__container__text'>
                        <span>{' '}</span>
                    </div>
                </div>
                <div className='contact__container__form__content__code__container'>
                    <div className='contact__container__form__content__code__container__line'>
                        <span>3</span>
                    </div>
                    <div className='contact__container__form__content__code__container__text'>
                        <span className='code__color__blue'>{'const'}</span>
                        &nbsp;
                        <span className='code__color__purple'>{'message'}</span>
                        &nbsp;
                        <span className='code__color__blue'>{'='}</span>
                        &nbsp;
                        <span>{'{'}</span>
                    </div>
                </div>
                <div className='contact__container__form__content__code__container'>
                    <div className='contact__container__form__content__code__container__line'>
                        <span>4</span>
                    </div>
                    <div className='contact__container__form__content__code__container__text'>
                        &nbsp;&nbsp;
                        <span className='code__color__blue'>{'name'}</span>
                        <span>{':'}</span>
                        &nbsp;
                        <span className='code__color__orange'>{`"${formData.name}"`}</span>
                        <span>{','}</span>
                    </div>
                </div>
                <div className='contact__container__form__content__code__container'>
                    <div className='contact__container__form__content__code__container__line'>
                        <span>5</span>
                    </div>
                    <div className='contact__container__form__content__code__container__text'>
                        &nbsp;&nbsp;
                        <span className='code__color__blue'>{'email'}</span>
                        <span>{':'}</span>
                        &nbsp;
                        <span className='code__color__orange'>{`"${formData.email}"`}</span>
                        <span>{','}</span>
                    </div>
                </div>
                <div className='contact__container__form__content__code__container'>
                    <div className='contact__container__form__content__code__container__line'>
                        <span>6</span>
                    </div>
                    <div className='contact__container__form__content__code__container__text'>
                        &nbsp;&nbsp;
                        <span className='code__color__blue'>{'message'}</span>
                        <span>{':'}</span>
                        &nbsp;
                        <span className='code__color__orange'>{`"${formData.message}"`}</span>
                    </div>
                </div>
                <div className='contact__container__form__content__code__container'>
                    <div className='contact__container__form__content__code__container__line'>
                        <span>7</span>
                    </div>
                    <div className='contact__container__form__content__code__container__text'>
                        <span>{'}'}</span>
                    </div>
                </div>
                <div className='contact__container__form__content__code__container'>
                    <div className='contact__container__form__content__code__container__line'>
                        <span>8</span>
                    </div>
                    <div className='contact__container__form__content__code__container__text'>
                        <span>{' '}</span>
                    </div>
                </div>
                <div className='contact__container__form__content__code__container'>
                    <div className='contact__container__form__content__code__container__line'>
                        <span>9</span>
                    </div>
                    <div className='contact__container__form__content__code__container__text'>
                        <span className='code__color__purple'>{'button'}</span>
                        <span >{'.'}</span>
                        <span className='code__color__purple'>{'addEventListener'}</span>
                        <span>{'('}</span>
                        <span className='code__color__orange'>{'"click"'}</span>
                        <span>{', ()'}</span>
                        &nbsp;
                        <span className='code__color__blue'>{'=>'}</span>
                        &nbsp;
                        <span>{'{'}</span>
                    </div>
                </div>
                <div className='contact__container__form__content__code__container'>
                    <div className='contact__container__form__content__code__container__line'>
                        <span>10</span>
                    </div>
                    <div className='contact__container__form__content__code__container__text'>
                        &nbsp;&nbsp;
                        <span className='code__color__blue'>{'form'}</span>
                        <span >{'.'}</span>
                        <span className='code__color__blue'>{'send'}</span>
                        <span>{'('}</span>
                        <span className='code__color__blue'>{'message'}</span>
                        <span>{');'}</span>
                    </div>
                </div>
                <div className='contact__container__form__content__code__container'>
                    <div className='contact__container__form__content__code__container__line'>
                        <span>11</span>
                    </div>
                    <div className='contact__container__form__content__code__container__text'>
                        <span>{'});'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCode;