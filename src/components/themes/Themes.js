import React from "react";
import "../../styles/components/themes.scss";
import CircularText from "./CircularText";
import { GameIconsPalette } from "./GameIconsPalette";

const Themes = () => {
    return (
        <div className='themes'>
            <div className='themes__text'>
                <CircularText />
            </div>
            <div className='themes__cercle'>
                <GameIconsPalette />
            </div>
        </div>
    );
};

export default Themes;
