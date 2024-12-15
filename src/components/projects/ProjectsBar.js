import React, { useState } from 'react';
import { MaterialSymbolsArrowDropDown } from './icons/MaterialSymbolsArrowDropDown';
import ProjectsBarLanguage from './ProjectsBarLanguage';

const ProjectsBar = ({ setActiveLanguages, activeLanguages, languages }) => {
    const [isProjectsOpen, setIsProjectsOpen] = useState(true);

    const toggleProjects = () => {
        setIsProjectsOpen(!isProjectsOpen);
    };

    const handleLanguageClick = (name) => {
        const isActive = activeLanguages.includes(name);
        const newActiveLanguages = isActive
            ? activeLanguages.filter((lang) => lang !== name)
            : [...activeLanguages, name];

        setActiveLanguages(newActiveLanguages);
    };

    return (
        <div className='projects__bar'>
            <div className={`projects__bar__collapse ${isProjectsOpen ? 'projects__bar__collapse__open' : ''}`}>
                <div
                    className='projects__bar__collapse__title text-hover mouse-hover'
                    onClick={toggleProjects}
                >
                    <MaterialSymbolsArrowDropDown />
                    <span>Projets</span>
                </div>
                <div className="projects__bar__collapse__languages">
                    {languages.map(({ name, icon }) => (
                        <ProjectsBarLanguage
                            key={name}
                            language={name}
                            icon={icon}
                            isActive={activeLanguages.includes(name)}
                            onClick={() => handleLanguageClick(name)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsBar;