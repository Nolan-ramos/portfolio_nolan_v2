import React from 'react';
import HomeText from '../components/home/HomeText';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <HomeText />
                <div className='home__code'>
                </div>
            </div>
        </div>
    );
};

export default Home;
