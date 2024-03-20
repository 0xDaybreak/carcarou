import React from 'react';
import Grid from '@mui/material/Grid';
import Card from './Card';
import './LoggedBody.css';
import { useNavigate } from "react-router-dom";

const LoggedBody= () => {
    const navigate = useNavigate();

    const handleCardClick = (destination:string) => {
        navigate(destination);
    }

    return (
        <div className={"logged-items"}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Card toDisplay={'image1'} name={'Shop'} handleCardClick={() => handleCardClick('/shop')} />
                </Grid>
                <Grid item xs={6}>
                    <Card toDisplay={'image2'} name={'Customer'} handleCardClick={() => handleCardClick('/cars')} />
                </Grid>
            </Grid>
        </div>
    );
}

export default LoggedBody;
