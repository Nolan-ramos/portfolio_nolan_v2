import React, { useEffect, useState } from "react";
import CircularText from "./CircularText";
import { GameIconsPalette } from "./icons/GameIconsPalette";
import { LineMdCloseSmall } from "./icons/LineMdCloseSmall";
import ThemesColor from "./ThemesColor";
import ThemesData from "./ThemesData";

const Themes = ({ isThemeOpen, toggleTheme }) => {
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem("selectedTheme");
        return savedTheme ? ThemesData[savedTheme] : ThemesData.violet;
    };
    const [selectedTheme, setSelectedTheme] = useState(getInitialTheme());
    const applyTheme = (themeColors) => {
        const root = document.documentElement.style;
        Object.entries(themeColors).forEach(([property, value]) => {
            root.setProperty(property, value);
        });
    };
    const changeTheme = (theme) => {
        setSelectedTheme(theme);
        localStorage.setItem("selectedTheme", theme.name.toLowerCase());
    };
    useEffect(() => {
        applyTheme(selectedTheme.colors);
    }, [selectedTheme]);
    useEffect(() => {
        applyTheme(getInitialTheme().colors);
    }, []);

    return (
        <div className={`themes ${isThemeOpen ? "themes__open" : "themes__close"}`}>
            <div 
                className="themes__icon__close text-hover mouse-hover"
                onClick={toggleTheme}>
                <LineMdCloseSmall />
            </div>
            <div className="themes__container__svg">
                <div className="themes__container__svg__content">
                    <div className="themes__container__svg__content__text">
                        <CircularText />
                    </div>
                    <div
                        className="themes__container__svg__content__cercle text-hover mouse-hover"
                        onClick={toggleTheme}
                    >
                        <GameIconsPalette />
                    </div>
                </div>
            </div>
            <div className="themes__container__choice">
                <ThemesColor 
                    ThemesData={ThemesData} 
                    selectedTheme={selectedTheme} 
                    changeTheme={changeTheme} 
                />
            </div>
        </div>
    );
};

export default Themes;