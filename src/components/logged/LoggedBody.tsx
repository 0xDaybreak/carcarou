import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Card from './Card';
import './LoggedBody.css';
import {useNavigate} from "react-router-dom";


interface LoggedBodyContainerProps {
    isLoggedIn: boolean;
}

const LoggedBody: React.FC<LoggedBodyContainerProps> = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
    const navigate = useNavigate();

    const handleCardClick = (destination: string) => {
        navigate(destination);
    }
    const handleLogIn = () => {
        setIsLoggedIn(props.isLoggedIn);
    }

    useEffect(() => {
        handleLogIn();
        navigate("/in");
    }, [isLoggedIn])


    return (
        isLoggedIn ? (<div className={"logged-items"}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card toDisplay={'image1'} name={'Shop'} handleCardClick={() => handleCardClick('/shop')}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Card toDisplay={'image2'} name={'Customer'} handleCardClick={() => handleCardClick('/cars')}/>
                    </Grid>
                </Grid>
            </div>)
            : <div><h1>Please log in</h1></div>

    );
}

export default LoggedBody;
