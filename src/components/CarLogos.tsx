import React, { useState } from "react";
import "./CarLogos.css";
import volkswagenLogo from "../images/Volkswagen.png";
import nissanLogo from "../images/Nissan.png";
import toyotaLogo from "../images/Toyota.png";

interface CarLogosProps {
    images: string[];
}


const CarLogos: React.FC<CarLogosProps> = (props) => {
    const [selectedLogo, setSelectedLogo] = useState<string | null>(null);

    const handleLogoClick = (make: string) => {
        setSelectedLogo(make);
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

    return (
        <div className={"carlogos-wrapper"}>
            {props.images.map((img, index) => (
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
