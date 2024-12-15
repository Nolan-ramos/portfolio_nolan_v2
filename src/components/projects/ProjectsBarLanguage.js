import React from 'react';
import { MaterialSymbolsCheckRounded } from './icons/MaterialSymbolsCheckRounded';

const ProjectsBarLanguage = ({ language, icon, isActive, onClick }) => {
    return (
        <div
            className={`projects__bar__collapse__languages__language mouse-hover ${isActive ? 'projects__bar__collapse__languages__language__active' : ''}`}
            onClick={onClick}>
            <div className='projects__bar__collapse__languages__language__checkbox'>
                {isActive && <MaterialSymbolsCheckRounded />}
            </div>
            <div className='projects__bar__collapse__languages__language__container'>
                <div className='projects__bar__collapse__languages__language__container__icon'>{icon}</div>
                <div className='projects__bar__collapse__languages__language__container__name'>{language}</div>
            </div>
        </div>
    );
};

export default ProjectsBarLanguage;
