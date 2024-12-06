import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import HeaderLinks from './HeaderLinks.js';

const HeaderBar = ({ isMenuOpen, toggleMenu }) => {
    return (
        <header className="headerbar">
            <div className="headerbar__name">_nolan-ramos</div>
            <HeaderLinks menuOpen={isMenuOpen} closeMenu={() => toggleMenu(false)} />
            <HamburgerMenu menuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </header>
    );
};

export default HeaderBar;
