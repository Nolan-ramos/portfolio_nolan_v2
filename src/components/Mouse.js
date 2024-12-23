import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Mouse = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);
    const location = useLocation();

    useEffect(() => {
        // Détecter si l'utilisateur est sur un appareil desktop
        const updateDeviceType = () => {
            const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
            setIsDesktop(!isTouchDevice);
        };

        updateDeviceType();
        window.addEventListener('resize', updateDeviceType);

        return () => {
            window.removeEventListener('resize', updateDeviceType);
        };
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

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
    }, [isDesktop]);

    useEffect(() => {
        if (!isDesktop) return;

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

        observer.observe(document.body, { childList: true, subtree: true });

        attachHoverEvents();

        return () => {
            observer.disconnect();
        };
    }, [location, isDesktop]);

    if (!isDesktop) {
        return null; // Ne rien rendre si on est sur mobile ou tablette
    }

    const cursorStyle = {
        position: 'fixed',
        zIndex: 9999,
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`,
        width: '10px',
        height: '10px',
        backgroundColor: `${isHovering ? 'rgba(0, 0, 0, 0)' : 'var(--secondary-action-color)'}`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
        border: `1.5px solid var(--secondary-action-color)`,
        pointerEvents: 'none',
        boxShadow: `var(--secondary-action-color) 0px 0px 15px 2px, inset 0 0 10px 1px var(--secondary-action-color)`,
        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, border 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    };

    return <div className="custom-cursor" style={cursorStyle}></div>;
};

export default Mouse;