import React from 'react';
import HomeCode from '../components/home/HomeCode';
import HomeText from '../components/home/HomeText';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <HomeText />
            </div>
            <HomeCode />
        </div>
    );
};

export default Home;
