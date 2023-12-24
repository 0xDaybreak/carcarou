import React, {useState} from "react";
import Button from '@mui/material/Button';
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import './ImageSlider.css';
interface Image {
    url: string;
}

interface ImageSliderProps {
    images: Image[]
}

const ImageSlider: React.FC<ImageSliderProps> = (props: ImageSliderProps) => {
    const [counter, setCounter]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(1)
    const handleOnRightClick = () => {
        console.log(counter)
        if (counter == 9) {
            setCounter(prevCounter => prevCounter - 8)
            console.log(counter)
        }
        else if(counter < 9) {
            setCounter(prevCounter => prevCounter + 1)
            console.log(counter)
        }
    }
    const handleOnLeftClick = () => {
        if(counter == 1) {
            setCounter(prevCounter => prevCounter + 8)
        } else if (counter < 10) {
            setCounter(prevCounter => prevCounter - 1)
        }
        console.log(counter)
    }
    return (
        props.images.length > 0 ? (
            <div className="image-slider-container"  >
                <img src={props.images[counter].url} alt="new" className="context-holder"/>
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