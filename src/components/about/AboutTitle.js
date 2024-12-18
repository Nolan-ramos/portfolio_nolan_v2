import React from 'react';
import { NavLink } from 'react-router-dom';
import { LineMdCloseSmall } from './icons/LineMdCloseSmall';

const AboutTitle = () => {
    return (
        <div className='about__container__title'>
            <div className='about__container__title__content'>
                <span className='about__container__title__content__text'>about</span>
                <NavLink to="/" className='about__container__title__content__icon mouse-hover text-hover'>
                    <LineMdCloseSmall/>
                </NavLink>
            </div>
        </div>
    );
};

export default AboutTitle;
