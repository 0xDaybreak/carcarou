import React, {useEffect, useState} from "react";
import "./CarLogos.css";
import volkswagenLogo from "../images/make/Volkswagen.png";
import nissanLogo from "../images/make/Nissan.png";
import toyotaLogo from "../images/make/Toyota.png";

interface CarLogosProps {
    images: string[];
    onLogoClick: (make:string) => void;
}


const CarLogos: React.FC<CarLogosProps> = (props) => {
    const [selectedLogo, setSelectedLogo] = useState<string | null>(null);
    const [convertedArray, setConvertedArray] = useState<string[]>([]);
    const handleLogoClick = (make: string) => {
        setSelectedLogo(make);
        props.onLogoClick(make);
    };

    const offerCorrectLogo = (logo:string) => {
        switch(logo) {
            case "Volkswagen":
                return volkswagenLogo
            case "Nissan":
                return nissanLogo
            case "Toyota":
                return toyotaLogo
        }
        return "photo error"
    }

    useEffect(() => {
        const uniqueSet = new Set(props.images);
        const uniqueArray = Array.from(uniqueSet);
        setConvertedArray(uniqueArray);
    }, [props.images])

    return (
        <div className={"carlogos-wrapper"}>
            {convertedArray.map((img, index) => (
                <img
                    className={`carlogos ${selectedLogo === img ? "selected" : ""}`}
                    key={index}
                    src={offerCorrectLogo(img)}
                    alt={img}
                    onClick={() => handleLogoClick(img)}
                />
            ))}
        </div>
    );
};

export default CarLogos;
