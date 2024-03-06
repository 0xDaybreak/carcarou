import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CarSelectionForm from "./components/CarSelectionForm";
import ImageSlider from "./components/ImageSlider";
import HomeContainer from "./components/home/HomeContainer";

function App() {
  return (
      <Router>
          <div className="form-container">
              <Routes>
                  <Route path="" element={<HomeContainer/>}/>
                  <Route path="/cars" element={<CarSelectionForm />} />
                  <Route path="/cars/visualize/" element={<ImageSlider/>} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
