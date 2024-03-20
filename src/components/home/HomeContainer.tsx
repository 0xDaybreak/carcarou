import React, {useState} from 'react';

import Body from './Body';
import './HomeContainer.css';
import LoggedBody from '../logged/LoggedBody';

interface HomeContainerProps {
    isLoggedIn: boolean;
}

const HomeContainer:React.FC<HomeContainerProps> = (props) => {


    return (
        <div className={"bg-color"}>
            {props.isLoggedIn? <LoggedBody/>: <Body/>}
        </div>
    );
};

export default HomeContainer;
