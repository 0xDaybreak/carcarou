
import './Shop.css';
import ColorGrid from "./ColorGrid";
import {useEffect, useState} from "react";
import MakeModelYear from "./MakeModelYear";


interface Color {
    ral: string;
    name: string;
    hex: string;
}

const Shop = () => {
    const[colors, setColors] = useState<Color[]>([])
    const [isConfirm, setIsConfirm] = useState<boolean>(false);

    const handleConfirm = () => {
        setIsConfirm(true);
    }

    useEffect(() => {
        fetch("http://127.0.0.1:7071/colors", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data:Color[]) => {
                setColors(data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
    <div className={"shop-container"}>
        {isConfirm ? <ColorGrid colors={colors} /> : <MakeModelYear handleConfirm={handleConfirm}/>}
    </div>
    );
}

export default Shop;