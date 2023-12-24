import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageSlider from "./components/ImageSlider";

function App() {
  let images: [{url:string}] = [{url:""}]
  for(let i = 1; i <= 9; i++) {
    let url = "https://cdn.nwi-ms.com/media/ro/V/mc/RC814J24/model/0" + i + ".jpg?F=0Q0Q&P=VM&M=$TA@8G1@PCG&size=XL"
    images.push({url:url})
  }
  console.log(images)
  return (
        <ImageSlider images={images}/>
  );
}

export default App;
