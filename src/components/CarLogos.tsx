import React, { useEffect, useState } from "react";
import "./CarSelectionForm.css";
import VolkswagenLogo from "../images/Volkswagen.png";
import NissanLogo from "../images/Nissan.png";
import ToyotaLogo from "../images/Toyota.png";
import "./CarLogos.css";

interface Car {
    make: string;
    model: string;
    year: number;
}

const CarLogos = () => {
    const [logoNames, setLogoNames] = useState<Car[]>([]);
    const [loadedLogos, setLoadedLogos] = useState<HTMLImageElement[]>([]);
    const [selectedLogo, setSelectedLogo] = useState<string | null>(null);

    useEffect(() => {
        fetch("http://127.0.0.1:7070/cars", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setLogoNames(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        const logos = logoNames.map((logoName) => {
            let logo;
            switch (logoName.make) {
                case "Volkswagen":
                    logo = VolkswagenLogo;
                    break;
                case "Nissan":
                    logo = NissanLogo;
                    break;
                case "Toyota":
                    logo = ToyotaLogo;
                    break;
                default:
                    logo = "null";
            }

            const img = new Image();
            img.src = logo;
            img.alt = logoName.make;
            console.log(img);
            return img;
        });

        setLoadedLogos(logos);
    }, [logoNames]);

    const handleLogoClick = (make: string) => {
        setSelectedLogo(make);
    };

    return (
        <div className={"carlogos-wrapper"}>
            {loadedLogos.map((img, index) => (
                <img
                    className={`carlogos ${selectedLogo === logoNames[index].make ? "selected" : ""}`}
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    onClick={() => handleLogoClick(logoNames[index].make)}
                />
            ))}
        </div>
    );
};

export default CarLogos;