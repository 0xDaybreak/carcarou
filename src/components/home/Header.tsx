// Header.js
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './Header.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';

const Header = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSignUp = () => {
        // Handle sign up logic
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
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Sign Up</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" label="Name" type="text" fullWidth />
                    <TextField margin="dense" label="Email Address" type="email" fullWidth />
                    <TextField margin="dense" label="Password" type="password" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">Cancel</Button>
                    <Button onClick={handleSignUp} color="primary">Sign Up</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Header;
