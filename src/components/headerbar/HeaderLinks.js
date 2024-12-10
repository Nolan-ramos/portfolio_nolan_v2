import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderLinks = ({ menuOpen, closeMenu }) => {
    const links = [
        { path: '/', label: '_Accueil' },
        { path: '/about', label: '_A_propos' },
        { path: '/projects', label: '_Projets' },
        { path: '/contact', label: '_Contact' }
    ];

    return (
        <nav className={`headerbar__nav ${menuOpen ? 'headerbar__nav__open' : 'headerbar__nav__close'}`}>
            <div className="headerbar__home_about_projects">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        className={({ isActive }) =>
                            `text-hover mouse-hover headerbar__link ${isActive ? 'headerbar__link__active' : ''} ${
                                link.path === '/contact' ? 'headerbar__link__contact' : ''
                            }`
                        }
                        to={link.path}
                        onClick={closeMenu}>
                        {link.label}
                    </NavLink>
                ))}
            </div>
            <div className="headerbar__contact">
                <NavLink
                    className={({ isActive }) =>
                        `text-hover mouse-hover headerbar__link headerbar__contact__link ${isActive ? 'headerbar__link__active' : ''}`
                    }
                    to="/contact"
                    onClick={closeMenu}>
                    _Contact
                </NavLink>
            </div>
        </nav>
    );
};

export default HeaderLinks;