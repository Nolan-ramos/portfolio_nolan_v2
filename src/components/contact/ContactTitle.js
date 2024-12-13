import React from 'react';
import { LineMdCloseSmall } from './icons/LineMdCloseSmall';

const ContactTitle = () => {
    return (
        <div className='contact__container__title'>
            <div className='contact__container__title__content'>
                <span className='contact__container__title__content__text'>contact</span>
                <LineMdCloseSmall />
            </div>
        </div>
    );
};

export default ContactTitle;
