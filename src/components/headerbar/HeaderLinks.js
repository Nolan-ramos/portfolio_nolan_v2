import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderLinks = ({ menuOpen, closeMenu }) => {
    const links = [
        { path: '/', label: '_Home' },
        { path: '/about', label: '_About' },
        { path: '/projects', label: '_Projects' }
    ];

    return (
        <nav className={`headerbar__nav ${menuOpen ? 'headerbar__nav__open' : ''}`}>
            <div className="headerbar__home_about_projects">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        className={({ isActive }) =>
                            `text_hover headerbar__link ${isActive ? 'headerbar__link__active' : ''}`
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
                        `text_hover headerbar__link headerbar__contact__link ${isActive ? 'headerbar__link__active' : ''}`
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