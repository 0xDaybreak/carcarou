import React, { useState, useEffect } from "react";
import './Card.css';

interface CardProps {
    toDisplay: string;
}

const Card: React.FC<CardProps> = (props) => {
    const [imageSource, setImageSource] = useState<string>('');

    useEffect(() => {
        const loadImage = async () => {
            try {
                let importImage;
                if (props.toDisplay === 'image1') {
                    importImage = await import('./images/carchange.png');
                } else if (props.toDisplay === 'image2') {
                    importImage = await import('./images/customer.png');
                }
                if (importImage !=null){
                    setImageSource(importImage.default);
                }
            } catch (error) {
                console.error('Error loading image:', error);
            }
        };
        loadImage();
    }, [props.toDisplay]);

    return (
        <div className="card">
            <img src={imageSource} alt="Card Image" />
            <span className="card-text">Auto Paint Shop</span>
        </div>
    );
}

export default Card;
