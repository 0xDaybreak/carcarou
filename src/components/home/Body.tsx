import {Grid} from '@mui/material';
import './Body.css';
import React, {useEffect, useState} from "react";
import redCar from './gifs/red.png';
import blueCar from './gifs/blue.png';
import blackCar from './gifs/black.png';
import whiteCar from './gifs/white.png';
import aCustomization from './images/acustomization.png';
import carVec from './images/carvec.png';


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
            <Grid container spacing={2} className={"grid"}>
                <Grid item xs={12} md={6}>
                    {/* Content for the left column */}
                    <div className="left-column">
                        <div className="gradient-background-l"></div>
                        <h1 className="app-heading">
                            Visualize Your Dream Car Discover Your Style
                        </h1>
                        <span className="sub-heading">
                                Select from an array of vibrant
                            colors to match your personality and stand out on the road.
                    </span>
                        <img className="a-customization" src={aCustomization}/>
                        <div className="left-column-feature">
                            <h2 className="feature-heading">Discover Iconic Brands.</h2>
                            <p className="feature-description">
                                Embark on a journey of automotive excellence with our curated selection of iconic brands,
                                including Volkswagen, Toyota, Nissan, and Audi. Each marque represents a unique blend of
                                craftsmanship, innovation, and performance, promising an unforgettable driving experience.
                                Whether you crave the reliability of Toyota, the German engineering of Volkswagen and Audi,
                                or the innovation of Nissan, our collection offers a diverse range of options to suit every
                                preference and lifestyle. Explore the epitome of automotive engineering and elevate your driving
                                adventure with the renowned brands that define automotive excellence.
                            </p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* Content for the right column */}
                    <div className="right-column">
                        <div className="gradient-background-r"></div>
                        <img src={cars[carIndex]} alt="Car" className={"car"}/>
                    </div>
                    <div className="right-column-feature">
                        <h2 className="feature-heading">Unlock Your Car's Potential.</h2>
                        <p className="feature-description">
                            Elevate your driving experience with our advanced car color visualizer.
                            With its intuitive interface and vast selection of colors, you can
                            unleash your creativity and design a car that reflects your unique style.
                            Stand out from the crowd and turn heads wherever you go.
                            Our visualizer tool empowers you to transform your vehicle into a
                            personalized masterpiece that embodies both elegance and innovation.
                            Get ready to explore endless possibilities and make a statement
                            with your dream car today.
                        </p>
                        <p className="feature-description">
                            Immerse yourself in the world of customization with our cutting-edge car color visualizer.
                            Explore a seamless interface and an extensive spectrum of hues, allowing you to unleash your
                            imagination and design a vehicle that embodies your distinct personality. Break away from
                            convention and command attention wherever you go. Our innovative visualizer empowers you to
                            transform your car into a one-of-a-kind masterpiece, blending sophistication with ingenuity.
                            Embark on a journey of endless possibilities and make a lasting impression with your dream car today.
                        </p>
                    </div>
                    <img className="c-customization" src={carVec}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Body;
