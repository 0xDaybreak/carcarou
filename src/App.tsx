import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CarSelectionForm from "./components/logged/customer/CarSelectionForm";
import ImageSlider from "./components/ImageSlider";
import HomeContainer from "./components/home/HomeContainer";
import Header from "./components/Header";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleLogIn = () => {
        setIsLoggedIn(true);
    };


    return (
      <Router>
          <div className="form-container">
              <Header handleLogIn={handleLogIn}/>
              <Routes>
                  <Route path="" element={<HomeContainer isLoggedIn={isLoggedIn}/>}/>
                  <Route path="/cars" element={<CarSelectionForm />} />
                  <Route path="/cars/visualize/" element={<ImageSlider/>} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
