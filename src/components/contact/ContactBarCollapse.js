import React from 'react';
import { MaterialSymbolsArrowDropDown } from './icons/MaterialSymbolsArrowDropDown';

const ContactBarCollapse = ({ isOpen, toggle, title, links }) => {
    return (
        <div className={`contact__bar__collapse__section
            ${isOpen ? 'contact__bar__collapse__section__open' : ''}`}>
            <div className='contact__bar__collapse__section__title text-hover mouse-hover' onClick={toggle}>
                <MaterialSymbolsArrowDropDown/>
                <span>{title}</span>
            </div>
            <div className="contact__bar__collapse__section__links">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__bar__collapse__section__link text-hover mouse-hover">
                        <span className="contact__bar__collapse__section__link__icon">
                            {link.icon}
                        </span>
                        <span className="contact__bar__collapse__section__link__text">
                            {link.text}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ContactBarCollapse;
