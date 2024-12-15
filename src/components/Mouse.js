import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Mouse = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const location = useLocation(); // Permet de détecter les changements de route

    useEffect(() => {
        // Cache le curseur natif
        document.body.style.cursor = 'none';

        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            // Réaffiche le curseur natif et nettoie les événements
            document.body.style.cursor = '';
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const attachHoverEvents = () => {
            const elements = document.querySelectorAll('.mouse-hover');

            elements.forEach((element) => {
                element.addEventListener('mouseenter', () => setIsHovering(true));
                element.addEventListener('mouseleave', () => setIsHovering(false));
            });

            return () => {
                elements.forEach((element) => {
                    element.removeEventListener('mouseenter', () => setIsHovering(true));
                    element.removeEventListener('mouseleave', () => setIsHovering(false));
                });
            };
        };

        const observer = new MutationObserver(() => {
            attachHoverEvents();
        });

        // Observe le body pour détecter les changements dans le DOM
        observer.observe(document.body, { childList: true, subtree: true });

        // Ajout initial des événements
        attachHoverEvents();

        return () => {
            observer.disconnect();
        };
    }, [location]); // Réattacher les événements à chaque changement de route

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