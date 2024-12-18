import React from 'react';
import { MaterialSymbolsArrowDropDown } from './icons/MaterialSymbolsArrowDropDown';

const AboutBarCollapse = ({ isOpen, toggle, title, categories, onCategorieClick, activeCategorie, isActiveSection }) => {
    return (
        <div className={`about__bar__collapse__section
            ${isOpen ? 'about__bar__collapse__section__open' : ''}`}>
            <div 
                className={`about__bar__collapse__section__title text-hover mouse-hover 
                ${isActiveSection ? 'about__bar__collapse__section__title__active' : ''}`} 
                onClick={toggle}>
                <MaterialSymbolsArrowDropDown />
                <span>{title}</span>
            </div>
            <div className="about__bar__collapse__section__categories">
                {categories.map((categorie) => (
                    <div
                        key={categorie.key}
                        onClick={(e) => {
                            e.preventDefault();
                            onCategorieClick(categorie.key);
                        }}
                        className={`about__bar__collapse__section__categorie text-hover mouse-hover ${activeCategorie?.key === categorie.key ? 'about__bar__collapse__section__categorie__active' : ''}`}>
                        <span className="about__bar__collapse__section__categorie__icon">
                            {categorie.icon}
                        </span>
                        <span className="about__bar__collapse__section__categorie__text">
                            {categorie.categorie}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default AboutBarCollapse;