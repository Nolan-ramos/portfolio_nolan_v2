import React from 'react';
import ProjectsBar from '../components/projects/ProjectsBar';
import ProjectsTitle from '../components/projects/ProjectsTitle';
const Projects = () => {
    return (
        <div className='projects'>
            <div className='projects__title__mob'>_projets</div>
            <ProjectsBar />
            <div className='projects__container'>
                <ProjectsTitle />
                tesst
            </div>
        </div>
    );
};

export default Projects;