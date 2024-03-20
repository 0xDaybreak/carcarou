import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import React from "react";
import './ColorCard.css';


interface Color {
    ral: string;
    name: string;
    hex: string;
}

const ColorCard: React.FC<Color> = ({ral, name, hex}) => {
    return (
            <Grid className={"card"} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Typography variant="h5" component="h2" className="title">
                    {ral}
                </Typography>
                <Typography variant="body2" component="p">
                    {name}
                </Typography>
                <div style={{backgroundColor: hex, width: '100%', height: 100, marginTop: 10}}/>
                <Typography variant="body2" component="p">
                    {hex}
                </Typography>
            </Grid>
    );
};

export default ColorCard;