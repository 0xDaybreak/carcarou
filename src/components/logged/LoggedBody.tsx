import React from 'react';
import Grid from '@mui/material/Grid';
import Card from './Card';
import './LoggedBody.css'; // Import your CSS file for styling

const LoggedBody = () => {
    return (
        <div className={"logged-items"}>
            <Grid container spacing={2}>
                <Grid>
                    <Card toDisplay={'image1'} />
                </Grid>
                <Grid>
                    <Card toDisplay={'image2'} />
                </Grid>
            </Grid>
        </div>
    );
}

export default LoggedBody;
