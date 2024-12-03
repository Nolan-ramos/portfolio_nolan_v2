import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import HeaderLinks from './HeaderLinks.js';

const HeaderBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="headerbar">
            <div className="headerbar__name">_nolan-ramos</div>
            <HeaderLinks menuOpen={menuOpen} closeMenu={closeMenu} />
            <HamburgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </header>
    );
};

export default HeaderBar;
