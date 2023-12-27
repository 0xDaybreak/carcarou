import React, { useState, ChangeEvent } from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
    onUpload: (file: File) => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onUpload }) => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        setFile(selectedFile || null);
    };

    const handleUpload = () => {
        if (file) {
            onUpload(file);
        }
    };

    return (
        <div className="splash-screen">
            <h1>Welcome to Car Visualizer</h1>
            <p>Upload a picture of your car to get started</p>
            <label className="file-input-label">
                <input type="file" accept="image/*" onChange={handleFileChange} />
                Choose a file
            </label>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default SplashScreen;
