import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Mouse = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const location = useLocation(); // Permet de détecter les changements de route

    useEffect(() => {
        document.body.style.cursor = 'none';

        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.body.style.cursor = '';
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const attachHoverEvents = () => {
        const elements = document.querySelectorAll('.mouse-hover');

        elements.forEach((element) => {
            const handleMouseEnter = () => setIsHovering(true);
            const handleMouseLeave = () => setIsHovering(false);

            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);

            // Nettoyage pour éviter des écouteurs multiples
            return () => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            };
        });
    };

    // Réattache les événements à chaque changement de route
    useEffect(() => {
        attachHoverEvents();
    }, [location]); // location change à chaque changement de page

    const cursorStyle = {
        position: 'fixed',
        zIndex: 9999,
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`,
        width: '10px',
        height: '10px',
        backgroundColor: `${isHovering ? 'rgba(0, 0, 0, 0)' : 'var(--secondary-action-color)'}`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
        border: '1.5px solid var(--secondary-action-color)',
        pointerEvents: 'none',
        boxShadow: 'var(--secondary-action-color) 0px 0px 15px 2px, inset 0 0 10px 1px var(--secondary-action-color)',
        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, border 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    };

    return (
        <div>
            <div className="custom-cursor" style={cursorStyle}></div>
        </div>
    );
};

export default Mouse;
