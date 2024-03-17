import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import './HomeContainer.css';

const HomeContainer = () => {
    return (
        <div className={"bg-color"}>
            <Header/>
                <Body/>
        </div>
    );
};

export default HomeContainer;
