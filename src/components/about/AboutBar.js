import React from 'react';
import AboutBarCollapse from './AboutBarCollapse';
import AboutData from './AboutData';

const AboutBar = ({ sectionsState, toggleSection, onCategorieClick, activeCategorie }) => {
    const sections = Object.keys(AboutData).map((key) => ({
        key: key,
        title: key,
        categories: AboutData[key],
    }));

    const activeSectionKey = Object.keys(AboutData).find((sectionKey) =>
        AboutData[sectionKey].some((category) => category.key === activeCategorie?.key)
    );

    return (
        <div className="about__bar">
            <div className='about__bar__collapse'>
                {sections.map((section) => (
                    <AboutBarCollapse
                        key={section.key}
                        isOpen={sectionsState[section.key]}
                        toggle={() => toggleSection(section.key)}
                        title={section.title}
                        categories={section.categories}
                        onCategorieClick={onCategorieClick}
                        activeCategorie={activeCategorie}
                        isActiveSection={section.key === activeSectionKey}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutBar;