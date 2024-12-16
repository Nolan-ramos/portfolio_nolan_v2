import React from 'react';
import ProjectsData from './ProjectsData';
import languages from './language';

const ProjectsContent = ({ activeLanguages }) => {
    const filteredProjects = ProjectsData.filter(project =>
        activeLanguages.length === 0 || activeLanguages.some(language => project.languages.includes(language))
    );

    return (
        <div className='projects__container__content'>
            <div className='projects__container__content__center'>
                {filteredProjects.map((project) => (
                    <div key={project.id} className='projects__container__content__project'>
                        <h3 className='projects__container__content__project__title'>{project.title}</h3>
                        <div className='projects__container__content__project__infos'>
                            <div className='projects__container__content__project__infos__icons'>
                                {project.languages.map((language, index) => {
                                    const languageData = languages.find(lang => lang.name === language);
                                    return (
                                        <span key={index} className='projects__container__content__project__infos__icons__icon'>
                                            {languageData?.icon}
                                        </span>
                                    );
                                })}
                            </div>
                            <img 
                                className="projects__container__content__project__infos__image" 
                                src={project.image} 
                                alt={project.title}
                            />
                            <div className='projects__container__content__project__infos__container'>
                                <p className='projects__container__content__project__infos__container__text'>
                                    {project.description.map((line, index) => (
                                        <span key={index}>{line}</span>
                                    ))}
                                </p>
                                <a 
                                    className='projects__container__content__project__infos__container__link mouse-hover' 
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={project.link}
                                >
                                    Voir le projet
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsContent;