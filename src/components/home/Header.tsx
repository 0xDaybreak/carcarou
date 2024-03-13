// Header.js
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './Header.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import DialogComp from "./DialogComp";

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
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="auth-links">
                <a href="#">Login</a>
                <Button variant="outlined" className="visualizer-button" onClick={handleOpen}>Try Visualizer for Free</Button>
            </div>
            <DialogComp open={open} onClick={handleClose}/>

        </div>
    );
};

export default Header;
