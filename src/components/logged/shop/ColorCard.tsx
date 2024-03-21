import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import React from "react";
import './ColorCard.css';

interface Color {
    ral: string;
    name: string;
    hex: string;
}

const ColorCard: React.FC<Color> = ({ ral, name, hex }) => {
    return (
        <Grid className={"card-grid"} item xs={3} sm={2} md={3} lg={2} xl={1}>
            <Typography variant="h6" component="h2" className="title">
                {ral}
            </Typography>
            <Typography variant="body2" component="p">
                {name}
            </Typography>
            <div style={{ backgroundColor: hex, width: '100%', height: 50, marginTop: 10 }} />
            <Typography variant="body2" component="p">
                {hex}
            </Typography>
        </Grid>
    );
};

export default ColorCard;
