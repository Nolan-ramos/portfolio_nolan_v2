import React from 'react';
import { NavLink } from 'react-router-dom';
import { LineMdCloseSmall } from './icons/LineMdCloseSmall';

const ProjectsTitle = ({ activeLanguages }) => {
    return (
        <div className='projects__container__title'>
            <div className='projects__container__title__content'>
                <span className='projects__container__title__content__text'>
                    projets
                    {activeLanguages.length > 0 && (<> : {activeLanguages.join('; ')}</>)}
                </span>
                <NavLink to="/" className='projects__container__title__content__icon mouse-hover text-hover'>
                    <LineMdCloseSmall />
                </NavLink>
            </div>
        </div>
    );
};

export default ProjectsTitle;
