import React from 'react';
import HomeCodeContent from './HomeCodeContent';
const HomeCode = () => {
    const contentCount = 5;
    return (
        <div className='home__code'>
            {Array.from({ length: contentCount }, (_, index) => (
                <HomeCodeContent key={index} />
            ))}
        </div>
    );
};
export default HomeCode;
