import React, { useState } from 'react';
import { MaterialSymbolsArrowDropDown } from './icons/MaterialSymbolsArrowDropDown';

const ProjectsBar = () => {
    const [isProjectsOpen, setIsProjectsOpen] = useState(true);

    const toggleProjects = () => {
        setIsProjectsOpen(!isProjectsOpen);
    };
    return (
        <div className='projects__bar'>
            <div className={`projects__bar__collapse
                ${isProjectsOpen ? 'projects__bar__collapse__open' : ''}`}>
                <div className='projects__bar__collapse__title text-hover mouse-hover' onClick={toggleProjects}>
                    <MaterialSymbolsArrowDropDown/>
                    <span>Projets</span>
                </div>
                <div className="projects__bar__collapse__languages">
                    <div>Vue.js</div>
                    <div>React.js</div>
                    <div>Express.js</div>
                    <div>JavaScript</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsBar;
