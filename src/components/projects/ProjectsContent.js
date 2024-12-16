import project1 from './img/project1.png';
import project2 from './img/project2.png';
import project3 from './img/project3.png';

const ProjectsContent = () => {
    return (
        <div className='projects__container__content'>
            <div className='projects__container__content__center'>
                <div className='projects__container__content__project'>
                    <h3 className='projects__container__content__project__title'>Projet 1</h3>
                    <div className='projects__container__content__project__infos'>
                        <img className="projects__container__content__project__infos__image" src={project1} alt="project1"></img>
                        <div className='projects__container__content__project__infos__container'>
                            <p className='projects__container__content__project__infos__container__text'>
                                <span>Ce projet est la première version de mon portfolio.</span>
                                <span>Les informations sont fictives et servent uniquement à illustrer le design.</span>
                            </p>
                            <a 
                                className='projects__container__content__project__infos__container__link mouse-hover' 
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://nolan.3ntf.fr/">
                                Voir le projet
                            </a>
                        </div>
                    </div>
                </div>
                <div className='projects__container__content__project'>
                    <h3 className='projects__container__content__project__title'>Projet 2</h3>
                    <div className='projects__container__content__project__infos'>
                        <img className="projects__container__content__project__infos__image" src={project2} alt="project2"></img>
                        <div className='projects__container__content__project__infos__container'>
                            <p className='projects__container__content__project__infos__container__text'>
                                <span>Développement du site d'une MARPA où travaille une connaissances.</span>
                                <span>L'objectif était de faire une refonte du site existant, en le modernisant.</span>
                            </p>
                            <a 
                                className='projects__container__content__project__infos__container__link mouse-hover' 
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://marpa.vercel.app/index.html">
                                Voir le projet
                            </a>
                        </div>
                    </div>
                </div>
                <div className='projects__container__content__project'>
                    <h3 className='projects__container__content__project__title'>Projet 3</h3>
                    <div className='projects__container__content__project__infos'>
                        <img className="projects__container__content__project__infos__image" src={project3} alt="project3"></img>
                        <div className='projects__container__content__project__infos__container'>
                            <p className='projects__container__content__project__infos__container__text'>
                                <span>Développement d'un portfolio pour un ami.</span>
                                <span>Les informations sont fictives et servent uniquement à illustrer le design.</span>
                            </p>
                            <a 
                                className='projects__container__content__project__infos__container__link mouse-hover' 
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://portfolio-ami.vercel.app/">
                                Voir le projet
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsContent;