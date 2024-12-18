import React, { useState } from 'react';
import AboutBar from '../components/about/AboutBar';
import AboutData from '../components/about/AboutData';
import AboutTitle from '../components/about/AboutTitle';

const About = () => {
    // Présentation -> Profil par défaut
    const defaultSectionKey = Object.keys(AboutData)[0]; 
    const defaultCategorieKey = AboutData[defaultSectionKey][0]?.key;

    // Fermer toutes les sections par défaut sauf celles spécifiées
    const defaultOpenSections = ["présentation"];
    const [sectionsState, setSectionsState] = useState(
        Object.keys(AboutData).reduce((state, key) => {
            return { ...state, [key]: defaultOpenSections.includes(key) };
        }, {})
    );

    // Données de la catégorie active
    const [activeCategorie, setActiveCategorie] = useState(
        AboutData[defaultSectionKey].find((item) => item.key === defaultCategorieKey)
    );

    // Toggle des sections
    const toggleSection = (section) => {
        setSectionsState((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    // Changer la catégorie active
    const handleCategorieClick = (categorieKey) => {
        const sectionKeys = Object.keys(AboutData);
        for (const sectionKey of sectionKeys) {
            const categorie = AboutData[sectionKey].find((item) => item.key === categorieKey);
            if (categorie) {
                setActiveCategorie(categorie);
                break;
            }
        }
    };

    return (
        <div className="about">
            <div className='about__title__mob'>_about</div>
            <AboutBar
                sectionsState={sectionsState}
                toggleSection={toggleSection}
                onCategorieClick={handleCategorieClick}
                activeCategorie={activeCategorie}
            />
            <div className='about__container'>
                <AboutTitle />
                <div className='about__container__infos'>
                    <div className='about__container__infos__content'>
                        {activeCategorie ? activeCategorie.text : "Sélectionnez une catégorie pour voir les détails."}
                    </div>
                    <div className='about__container__infos__code'>
                        {activeCategorie ? activeCategorie.text : "Sélectionnez une catégorie pour voir les détails."}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;