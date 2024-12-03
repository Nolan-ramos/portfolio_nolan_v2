import React from 'react';

const HamburgerMenu = ({ menuOpen, toggleMenu }) => {
    return (
        <div className="headerbar__container_hamburger">
            <div
                className={`headerbar__hamburger ${menuOpen ? 'headerbar__hamburger__open' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default HamburgerMenu;
