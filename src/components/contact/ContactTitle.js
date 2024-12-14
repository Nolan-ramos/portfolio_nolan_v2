import React from 'react';
import { NavLink } from 'react-router-dom';
import { LineMdCloseSmall } from './icons/LineMdCloseSmall';

const ContactTitle = () => {
    return (
        <div className='contact__container__title'>
            <div className='contact__container__title__content'>
                <span className='contact__container__title__content__text'>contact</span>
                <NavLink to="/" className='contact__container__title__content__icon mouse-hover text-hover'>
                    <LineMdCloseSmall/>
                </NavLink>
            </div>
        </div>
    );
};

export default ContactTitle;
