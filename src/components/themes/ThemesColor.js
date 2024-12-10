import React from "react";
import { MaterialSymbolsLineEndArrowNotch } from "./icons/MaterialSymbolsLineEndArrowNotch";

const ThemesColor = ({ ThemesData, selectedTheme, changeTheme }) => {
    return (
        <div className="themes__container__choice__content">
            {Object.keys(ThemesData).map((colorKey) => {
                const theme = ThemesData[colorKey];
                return (
                    <div
                        key={colorKey}
                        className={`themes__container__choice__content__color mouse-hover ${
                            selectedTheme.name === theme.name ? "themes__container__choice__content__color__active" : ""
                        }`}
                        onClick={() => changeTheme(theme)}
                    >
                        <MaterialSymbolsLineEndArrowNotch />
                        <div className="themes__container__choice__content__color__name">{theme.name}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default ThemesColor;