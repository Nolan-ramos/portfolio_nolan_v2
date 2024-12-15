import React, { useState } from 'react';
import { MaterialSymbolsArrowDropDown } from './icons/MaterialSymbolsArrowDropDown';

const ProjectsBar = () => {
    const [isProjectsOpen, setIsProjectsOpen] = useState(true);

    const toggleProjects = () => {
        setIsProjectsOpen(!isProjectsOpen);
    };

    // Liste des langages
    const languages = ['Vue.js', 'React.js', 'Express.js', 'JavaScript'];

    return (
        <div className='projects__bar'>
            <div className={`projects__bar__collapse
                ${isProjectsOpen ? 'projects__bar__collapse__open' : ''}`}>
                <div 
                    className='projects__bar__collapse__title text-hover mouse-hover' 
                    onClick={toggleProjects}
                >
                    <MaterialSymbolsArrowDropDown />
                    <span>Projets</span>
                </div>
                <div className="projects__bar__collapse__languages">
                    {languages.map((language) => (
                        <ProjectsBarLanguage key={language} language={language} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsBar;
