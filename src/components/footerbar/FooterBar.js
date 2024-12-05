import React from 'react';
import '../../styles/components/footerbar.scss';
import { GameIconsPalette } from "./GameIconsPalette";
import { LineMdGithubLoop } from "./LineMdGithubLoop";
import { LineMdLinkedin } from "./LineMdLinkedin";

const FooterBar = () => {
    return (
        <footer className='footerbar'>
            <div className='footerbar__left'>
                <div className='footerbar__left__text'>Trouvez-moi sur :</div>
                <a 
                className='footerbar__left__reseau text-hover mouse-hover' 
                href="https://www.linkedin.com/in/nolan-ramos/">
                    <LineMdLinkedin/>
                </a>
                <a 
                className='footerbar__left__reseau text-hover mouse-hover' 
                href="https://github.com/Nolan-ramos">
                    <LineMdGithubLoop />
                </a>
            </div>
            <div className='footerbar__right'>
                <div className='footerbar__right__text'>Changez le thème :</div>
                <div className='footerbar__right__icon text-hover mouse-hover'><GameIconsPalette /></div>
            </div>
        </footer>
    );
};

export default FooterBar;