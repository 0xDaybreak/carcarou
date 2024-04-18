import React, {useState} from "react";
import touareg from '../images/model/touaregside.png'
import golf from '../images/model/golfside.png'
import tiguan from '../images/model/tiguan.png'
import xtrail from '../images/model/xtrailside.png'
import camry from '../images/model/camryside.png'
import './CarModel.css'

interface CarModelProps {
    modelsMap: Map<string, string[]>;
    modelToShow: string;
    onButtonShow: (model:string) => void;
}

const CarModel: React.FC<CarModelProps> = (props) => {
    const [selectedModel, setSelectedModel] = useState<string>("");
    const offerCorrectmodel = (img: string) => {
        console.log(props.modelsMap.get(props.modelToShow))
        switch (img) {
            case "Touareg":
                return touareg
            case "Golf":
                return golf
            case "Tiguan":
                return tiguan
            case "X-Trail":
                return xtrail
            case "Camry":
                return camry
        }
        return "no image"
    }

    const handleOnClick = (model: string) => {
        setSelectedModel(model);
        props.onButtonShow(model);
    }

    return (
        <div>
            {props.modelsMap.has(props.modelToShow) && props.modelsMap.get(props.modelToShow)?.map((img, index) => <img
                className={`carmodels ${selectedModel === img ? "selected" : ""}`} src={offerCorrectmodel(img)}
                alt={img} key={index} onClick={() => handleOnClick(img)}/>)}
        </div>
    );
}

export default CarModel;