import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {ColorResult, RGBColor, SketchPicker} from "react-color";
import './ImageSlider.css';
import {useLocation} from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Image {
    image_id: number;
    url: string[];
    colors:number[];
}

const ImageSlider = () => {
    const [counter, setCounter]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0);
    const [currentColor, setCurrentColor] = useState<RGBColor>({ r: 0, g: 0, b: 0 });
    const [image, setImage]: [Image, React.Dispatch<React.SetStateAction<Image>>] = useState({
        image_id: 0,
        url: ['error'],
        colors:[0,0,0]
    });

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const make = queryParams.get('make');
    const model = queryParams.get('model');
    const year = queryParams.get('year');

    const handleOnRightClick = () => {
        if (counter == 11) {
            setCounter(prevCounter => prevCounter - 11)
        } else if (counter < 11) {
            setCounter(prevCounter => prevCounter + 1)
        }
    }
    const handleOnLeftClick = () => {
        if (counter == 0) {
            setCounter(prevCounter => prevCounter + 11)
        } else if (counter < 12) {
            setCounter(prevCounter => prevCounter - 1)
        }
    }

    useEffect(() => {
        const apiUrl = `http://127.0.0.1:7071/cars/visualize?make=${make}&model=${model}&year=${year}`;
        fetch(apiUrl, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setImage(data);
                console.log("Data is set to: ");
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, [make, model, year]);

    useEffect(()=>{
        image.colors[0] = (currentColor.r);
        image.colors[1] = (currentColor.g);
        image.colors[2] = (currentColor.b);

    },[currentColor])


    const handleOnColorChange = (color: ColorResult) => {
        setCurrentColor(color.rgb);

    }
    const handleConfirmColorClick = () => {
        const apiUrl = "http://127.0.0.1:7071/cars/newimage";
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(image),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setImage(data)
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };


    return (
        image.url.length > 0 ? (
            <div className="image-slider-container">
                <div className={"sketchpicker"}>
                    <SketchPicker
                        color={currentColor}
                        onChangeComplete={handleOnColorChange}
                        disableAlpha={true}
                    />
                    <Button color ="info" variant={"contained"} endIcon=<ArrowForwardIosIcon/> className={"confirm-color-btn"} onClick={handleConfirmColorClick}>
                        Confirm Color
                    </Button>
                </div>
                <img src={image.url[counter]} alt="new" className="context-holder"/>
                <div className={"arrow-buttons-container"}>
                    <Button className={"arrow-buttons"} variant="text" onClick={handleOnLeftClick}>
                        <ArrowBackIcon/>
                    </Button>
                    <Button className={"arrow-buttons"} variant="text" onClick={handleOnRightClick}>
                        <ArrowBackIcon style={{transform: "rotate(180deg)"}}/>
                    </Button>
                </div>
            </div>
        ) : (
            <p>Not enough images in the array</p>
        )
    );
};
export default ImageSlider;