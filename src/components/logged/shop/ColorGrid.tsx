import Grid from "@mui/material/Grid";
import ColorCard from "./ColorCard";
import React from "react";
import './ColorGrid.css'

interface Color {
    ral: string;
    name: string;
    hex: string;
}

interface ColorGridProps {
    colors: Color[];
}

const ColorGrid:React.FC<ColorGridProps> = ({ colors }) => {
    return (
            <Grid className={"card-container"} container spacing={3}>
                {colors.map(color => (
                    <ColorCard key={color.ral} {...color} />
                ))}
            </Grid>
    );
};
export default ColorGrid