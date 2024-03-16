import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './Header.css';
import DialogComp from "./DialogComp";
import logo from './images/logo.png';

const Header = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="header">
            <div className={"left-nav-btns"}>
                <img className={"logo"} src={logo} alt={"home"}/>
                <Button variant="text">About us</Button>
                <Button variant="text">Contact</Button>
            </div>
            <div className="auth-links">
                <Button className="sign-in-btn" variant="text">Sign in</Button>
                <Button variant="outlined" onClick={handleOpen}>Try Visualizer for Free</Button>
            </div>
            <DialogComp open={open} onClick={handleClose}/>

        </div>
    );
};

export default Header;
