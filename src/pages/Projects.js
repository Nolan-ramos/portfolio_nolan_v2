import React, { useState } from 'react';
import ProjectsBar from '../components/projects/ProjectsBar';
import ProjectsContent from '../components/projects/ProjectsContent';
import ProjectsTitle from '../components/projects/ProjectsTitle';
import languages from '../components/projects/language';

const Projects = () => {
    const [activeLanguages, setActiveLanguages] = useState([]);

    return (
        <div className='projects'>
            <div className='projects__title__mob'>_projets</div>
            <ProjectsBar 
                setActiveLanguages={setActiveLanguages} 
                activeLanguages={activeLanguages} 
                languages={languages}
            />
            <div className='projects__container'>
                <ProjectsTitle activeLanguages={activeLanguages} />
                <ProjectsContent activeLanguages={activeLanguages} />
            </div>
        </div>
    );
};

export default Projects;
