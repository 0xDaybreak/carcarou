import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import './HomeContainer.css';
import LoggedBody from '../logged/LoggedBody';

const HomeContainer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleLogIn = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className={"bg-color"}>
            <Header handleLogIn={handleLogIn}/>
            {isLoggedIn? <LoggedBody/>: <Body/>}
        </div>
    );
};

export default HomeContainer;
