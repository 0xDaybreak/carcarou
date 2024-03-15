import {Grid} from '@mui/material';
import './Body.css';
import {useEffect, useState} from "react";
import redCar from './gifs/red.png';
import blueCar from './gifs/blue.png';
import blackCar from './gifs/black.png';
import whiteCar from './gifs/white.png';

const Body = () => {
    const [carIndex, setCarIndex] = useState(0);
    const cars = [redCar, blueCar, blackCar, whiteCar];

    useEffect(() => {
        const interval = setInterval(() => {
            setCarIndex((prevIndex) => (prevIndex + 1) % cars.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={"margin"}>

            <Grid container spacing={3} className={"grid"}>
                <Grid item xs={12} md={6}>
                    {/* Content for the left column */}
                    <div className="left-column">
                        <div className="gradient-background-l"></div>
                        <h1 className="app-heading">
                            Visualize Your Dream Car Discover Your Style
                            <span className="sub-heading">
                                Select from an array of vibrant
                            colors to match your personality and stand out on the road.
                </span>
                        </h1>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* Content for the right column */}
                    <div className="right-column">
                        <div className="gradient-background-r"></div>
                        <img src={cars[carIndex]} alt="Car" className={"car"}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Body;
