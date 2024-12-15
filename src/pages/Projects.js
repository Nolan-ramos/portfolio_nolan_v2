import React, { useState } from 'react';
import ProjectsBar from '../components/projects/ProjectsBar';
import ProjectsTitle from '../components/projects/ProjectsTitle';
import { MdiVuejs } from '../components/projects/icons/language/MdiVuejs';
import { MdiLanguageJavascript } from '../components/projects/icons/language/MdiLanguageJavascript';
import { IonLogoCss3 } from '../components/projects/icons/language/IonLogoCss3';
import { MdiSass } from '../components/projects/icons/language/MdiSass';
import { MdiReact } from '../components/projects/icons/language/MdiReact';
import { RiHtml5Fill } from '../components/projects/icons/language/RiHtml5Fill';

const Projects = () => {
    const [activeLanguages, setActiveLanguages] = useState(['Vue', 'React']);

    const languages = [
        { name: 'Vue', icon: <MdiVuejs /> },
        { name: 'React', icon: <MdiReact /> },
        { name: 'JS', icon: <MdiLanguageJavascript /> },
        { name: 'Sass', icon: <MdiSass /> },
        { name: 'CSS', icon: <IonLogoCss3 /> },
        { name: 'HTML', icon: <RiHtml5Fill /> },
    ];

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
                <div className='projects__container__projects'>
                    test
                </div>
            </div>
        </div>
    );
};

export default Projects;
