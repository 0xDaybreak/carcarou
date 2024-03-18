import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './Header.css';
import DialogComp from "./DialogComp";
import logo from './images/logo.png';
import DialogCompSignIn from "./DialogCompSignIn";

const Header = () => {

    const [isSignUpOpen, setOpenSignUp] = useState(false);
    const [isSignInOpen, setOpenSignIn] = useState(false);

    const handleSignUpOpen = () => {
        setOpenSignUp(true);
    };

    const handleCloseSignUp = () => {
        setOpenSignUp(false);
    };

    const handleSignInOpen = () => {
        setOpenSignIn(true);
    };

    const handleCloseSignIn = () => {
        setOpenSignIn(false);
    };

    return (
        <div className="header">
            <div className={"left-nav-btns"}>
                <img className={"logo"} src={logo} alt={"home"}/>
                <Button variant="text" className={"left-header-btn"}>About us</Button>
                <Button variant="text" className={"left-header-btn"}>Contact</Button>
            </div>
            <div className="auth-links">
                <Button className="sign-in-btn" variant="text" onClick={handleSignInOpen}>Sign in</Button>
                <Button variant="outlined" onClick={handleSignUpOpen}>Try Visualizer for Free</Button>
            </div>
            <DialogComp isSignUpOpen={isSignUpOpen} onClick={handleCloseSignUp}/>
            <DialogCompSignIn isSigInOpen={isSignInOpen} handleClose={handleCloseSignIn}/>
        </div>
    );
};

export default Header;
