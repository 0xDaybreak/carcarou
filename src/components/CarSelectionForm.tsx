import React, { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import CarLogos from "./CarLogos";
import "./CarSelectionForm.css";
import CarModel from "./CarModel";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Car {
    make: string;
    model: string;
    year: number;
}

const CarSelectionForm = () => {
    const [loadedMakes, setLoadedMakes] = useState<string[]>([]);
    const [makeToShow, setMakeToShow] = useState<string>("");
    const [carModelsMap, setCarModelsMap] = useState<Map<string, string[]>>(new Map());
    const [isVisualizeButtonShow, setIsVisualizeButtonShow] = useState<boolean>(false);
    const [modelToShow, setModelToShow] = useState<string>("");
    const navigate = useNavigate ();


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
        setMakeToShow(make)
        setIsVisualizeButtonShow(false);
    }

    const handleButtonShow = (modelToShow:string) => {
        setIsVisualizeButtonShow(true);
        setModelToShow(modelToShow);
    };

    const handleVisualizeButtonClick = () => {
        const route = `/cars/visualize/?make=${encodeURIComponent(makeToShow)}&model=${encodeURIComponent(modelToShow)}&year=${new Date().getFullYear()}`;
        navigate(route);
    };


    return (
        <div className={"car-selection_form"}>
            <h1>Please select a Logo in order to begin configuration</h1>
            <CarLogos images={loadedMakes} onLogoClick={handleLogoClick}/>
            <CarModel modelsMap={carModelsMap} modelToShow={makeToShow} onButtonShow={handleButtonShow}/>
            {isVisualizeButtonShow ? <Button color ="success" variant={"contained"} endIcon=<ArrowForwardIosIcon/> onClick={handleVisualizeButtonClick}>
                Visualize
            </Button> : <div></div>}
        </div>
    );
};

export default CarSelectionForm;
