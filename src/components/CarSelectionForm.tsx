import React, { useEffect, useState } from "react";
import CarLogos from "./CarLogos";
import "./CarSelectionForm.css";
import CarModel from "./CarModel";

interface Car {
    make: string;
    model: string;
    year: number;
}

const CarSelectionForm = () => {
    const [loadedMakes, setLoadedMakes] = useState<string[]>([]);
    const [modelToShow, setModelToShow] = useState<string>("");
    const [carModelsMap, setCarModelsMap] = useState<Map<string, string[]>>(new Map());

    useEffect(() => {
        fetch("http://127.0.0.1:7070/cars", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                const logoNames = data.map((car:Car) => car.make);
                setLoadedMakes(logoNames);
                const carModelsGroupedMap = data.reduce((map:Map<string, string[]>, car:Car) =>{
                    const modelsArray = map.get(car.make) || [];
                    modelsArray.push(car.model);
                    map.set(car.make, modelsArray);
                    return map;
                }, new Map<string, string[]>());
                setCarModelsMap(carModelsGroupedMap);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleLogoClick = (make:string) => {
        setModelToShow(make);
    }

    return (
        <div className={"car-selection_form"}>
            <h1>Please choose the make of the car you would like to configure the paint job for</h1>
            <CarLogos images={loadedMakes} onLogoClick={handleLogoClick}/>
            <CarModel modelsMap={carModelsMap} modelToShow={modelToShow}/>
        </div>
    );
};

export default CarSelectionForm;
