import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderBar /> 
                <div className="routes_container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <FooterBar /> 
                <Themes /> 
                <Mouse /> 
            </div>
        </BrowserRouter>
    );
}

export default App;
