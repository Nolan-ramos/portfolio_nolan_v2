import React from 'react';

const HomeText = () => {
    return (
        <div className='home__text'>
            <div className='home__text__top'>
                <p className="home__text__top__first">Bonjour, je suis</p>
                <h1 className="home__text__top__title">
                    <span>Nolan</span>
                    <span>Ramos</span>
                </h1>
                <p className="home__text__top__work code__color__blue">&gt; Développeur Front-end</p>
            </div>
            <div className='home__text__bottom'>
                <p className="home__text__bottom__slash">{'// Ce portfolio est la deuxième version'}</p>
                <p className="home__text__bottom__slash">{'// Retrouvez la première version sur ce lien :'}</p>
                <p className="home__text__bottom__link">
                    <span className='code__color__blue'>const</span>
                    <span className='code__color__green'>portfolioLink</span>
                    <span>=</span>
                    <a href="https://nolan.3ntf.fr/" className='code__color__red mouse-hover'>"https://nolan.3ntf.fr/"</a>
                    <span>;</span>
                </p>
            </div>
        </div>
    );
};

export default HomeText;
