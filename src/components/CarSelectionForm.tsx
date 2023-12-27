import React, { useEffect, useState } from "react";
import CarLogos from "./CarLogos";
import "./CarSelectionForm.css";

interface Car {
    make: string;
    model: string;
    year: number;
}

const CarSelectionForm = () => {
    const [logoNames, setLogoNames] = useState<Car[]>([]);
    const [loadedImages, setLoadedImages] = useState<string[]>([]);

    useEffect(() => {
        fetch("http://127.0.0.1:7070/cars", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setLogoNames(data);
                const imageNames = data.map((car:Car) => car.make);
                setLoadedImages(imageNames);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={"car-selection_form"}>
            <h1>Please choose the make of the car you would like to configure the paint job for</h1>
            <CarLogos images={loadedImages} />
        </div>
    );
};

export default CarSelectionForm;
