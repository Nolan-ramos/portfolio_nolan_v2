import React from "react";
const CircularText = () => {
    return (
        <svg className='themes__container__svg__content__text__icon' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <path
                    id="circle"
                    d="
                    M 50, 50
                    m -37, 0
                    a 37,37 0 1,1 74,0
                    a 37,37 0 1,1 -74,0
                    "
                />
            </defs>
            <text className='themes__container__svg__content__text__content'>
                <textPath xlinkHref="#circle">
                    Thème personnalisé - Thème personnalisé -
                </textPath>
            </text>
        </svg>
    );
};

export default CircularText;
