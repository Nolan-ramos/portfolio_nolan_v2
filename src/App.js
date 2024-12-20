import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Background from './components/background/Background.js';
import FooterBar from './components/footerbar/FooterBar.js';
import HeaderBar from './components/headerbar/HeaderBar.js';
import Mouse from './components/Mouse.js';
import Themes from './components/themes/Themes.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import './styles/main.scss';

function App() {
    const [isThemeOpen, setIsThemeOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleTheme = () => {
        setIsThemeOpen(!isThemeOpen);
        if (!isThemeOpen) setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) setIsThemeOpen(false);
    };
    return (
        <BrowserRouter>
            <div className="App">
                <Background /> 
                <Themes isThemeOpen={isThemeOpen} toggleTheme={toggleTheme} />
                <Mouse /> 
                <HeaderBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> 
                <div className="routes_container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <FooterBar toggleTheme={toggleTheme} />
            </div>
        </BrowserRouter>
    );
}

export default App;
