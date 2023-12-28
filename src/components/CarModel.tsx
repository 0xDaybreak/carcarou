import React from "react";
import touareg from '../images/model/touaregside.png'
import golf from '../images/model/golfside.png'

interface CarModelProps {
    modelsMap: Map<string, string[]>;
    modelToShow: string;
}

const CarModel: React.FC<CarModelProps> = (props) => {
    const offerCorrectmodel = (img: string) => {
        switch (img) {
            case "Touareg":
                return touareg
            case "Golf":
                return golf
        }
        return "no image"
    }

    return (
        <div>
            {props.modelsMap.has(props.modelToShow) && props.modelsMap.get(props.modelToShow)?.map((img, index) => <img
                src={offerCorrectmodel(img)} alt={img} key={index}/>)}
        </div>
    );
}

export default CarModel;