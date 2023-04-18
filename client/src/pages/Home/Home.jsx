import React from 'react'
import HomeMainBar from '../../components/HomeMainBar/HomeMainBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';

const Home = () => {
    return (
        <div className="home-container">
            <LeftSideBar></LeftSideBar>
            <div className="home-container2">
                <HomeMainBar />
                <RightSideBar />
            </div>
        </div>
    )
}

export default Home;