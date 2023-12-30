import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import './ImageSlider.css';
import {useLocation} from "react-router-dom";


interface Image {
    image_id: number;
    url: string[];
}

const ImageSlider = () => {
    const [counter, setCounter]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0)
    const [image, setImage]: [Image, React.Dispatch<React.SetStateAction<Image>>] = useState({
        image_id: 0,
        url: ['error'],
    });
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const make = queryParams.get('make');
    const model = queryParams.get('model');
    const year = queryParams.get('year');

    const handleOnRightClick = () => {
        console.log(counter)
        if (counter == 11) {
            setCounter(prevCounter => prevCounter - 11)
            console.log(counter)
        }
        else if(counter < 11) {
            setCounter(prevCounter => prevCounter + 1)
            console.log(counter)
        }
    }
    const handleOnLeftClick = () => {
        if(counter == 0) {
            setCounter(prevCounter => prevCounter + 11)
        } else if (counter < 12) {
            setCounter(prevCounter => prevCounter - 1)
        }
        console.log(counter)
    }

    useEffect(() => {
        const apiUrl = `http://127.0.0.1:7070/cars/visualize?make=${make}&model=${model}&year=${year}`;
        fetch(apiUrl, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setImage(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, [make, model, year]);
    return (
        image.url.length > 0 ? (
            <div className="image-slider-container"  >
                <img src={image.url[counter]} alt="new" className="context-holder"/>
                <div className={"arrow-buttons-container"}>
                    <Button className={"arrow-buttons"} variant="text" onClick={handleOnLeftClick}>
                        <ArrowBackIcon />
                    </Button>
                    <Button className={"arrow-buttons"} variant="text" onClick={handleOnRightClick}>
                        <ArrowBackIcon style={{ transform: "rotate(180deg)"}}/>
                    </Button>
                </div>
            </div>
        ) : (
            <p>Not enough images in the array</p>
        )
    );
};
export default ImageSlider;