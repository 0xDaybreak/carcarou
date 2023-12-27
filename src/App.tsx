import React, {useState} from 'react';
import './App.css';
import ImageSlider from "./components/ImageSlider";
import SplashScreen from "./components/SplashScreen";
import CarSelectionForm from "./components/CarSelectionForm";

function App() {
  const [isUploaded, setIsUploaded] = useState(false);
  const handleUpload = (file: File) => {
    console.log('Uploaded file:', file);
  };
  return (
      <div className={"form-container"}>
        <CarSelectionForm/>
      </div>
  );
}

export default App;
