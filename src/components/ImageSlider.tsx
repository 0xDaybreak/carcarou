import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import './ImageSlider.css';

interface Car {
    id: string,
    make: string,
    model: string,
    year: number,
    color_id: number,
    image_id: number,
}
interface Image {
    image_id: number;
    url: string[];
}

const ImageSlider = () => {
    const [counter, setCounter]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0)
    const [image, setImage]: [Image, React.Dispatch<React.SetStateAction<Image>>] = useState({
        image_id: 0,
        url: ['www.error.com'],
    });
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
        fetch("http://127.0.0.1:7070/cars", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setImage(data[0][1]);
                console.log(data);

            })
            .catch((error) => console.log(error));
    }, []);
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