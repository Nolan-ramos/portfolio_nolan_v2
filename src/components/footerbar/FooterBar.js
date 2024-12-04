import React from 'react';
import '../../styles/components/footerbar.scss';
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
            </div>
            <div className='footerbar__right'>
                <a className='footerbar__right__link text-hover mouse-hover' href="https://github.com/Nolan-ramos">
                    <div className='footerbar__right__text'>nolan-ramos</div>
                    <div className='footerbar__right__reseau'><LineMdGithubLoop /></div>
                </a>
            </div>
        </footer>
    );
};

export default FooterBar;