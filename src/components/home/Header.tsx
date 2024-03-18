import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Logout, Person, Settings} from '@mui/icons-material'; // Import icons for the menu items
import './Header.css';
import DialogComp from "./DialogComp";
import logo from './images/logo.png';
import DialogCompSignIn from "./DialogCompSignIn";

interface HeaderProps {
    handleLogIn: () => void,
}

const Header:React.FC<HeaderProps> = (props) => {
    const [isSignUpOpen, setOpenSignUp] = useState(false);
    const [isSignInOpen, setOpenSignIn] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);


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

    const handleSignIn = () => {
        setIsSignedIn(true);
        setShowSuccessNotification(true);
        setTimeout(() => {
            setShowSuccessNotification(false);
        }, 1500);
        props.handleLogIn();
    };

    const handleSignOut = () => {
        setIsSignedIn(false);
        setAnchorEl(null);
    };

    const handleAvatarClick = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleAvatarClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div className="header">
            <div className={"left-nav-btns"}>
                <img className={"logo"} src={logo} alt={"home"}/>
                <Button variant="text" className={"left-header-btn"}>About us</Button>
                <Button variant="text" className={"left-header-btn"}>Contact</Button>
            </div>
            {isSignedIn ?
                <div className="auth-links">
                    <Avatar className={"avatar"} alt="User" onClick={handleAvatarClick} />
                    <Popover
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleAvatarClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <List>
                            <ListItem button>
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                <ListItemText primary="Account" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Settings />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItem>
                            <ListItem button onClick={handleSignOut}>
                                <ListItemIcon>
                                    <Logout />
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItem>
                        </List>
                    </Popover>
                    {showSuccessNotification && (
                        <div className={"notification-wrapper"}>
                            <Alert severity="success" onClose={() => setShowSuccessNotification(false)}>
                                You have successfully signed in!
                            </Alert>
                        </div>
                    )}
                </div>
                :
                <div className="auth-links">
                    <Button className="sign-in-btn" variant="text" onClick={handleSignInOpen}>Sign in</Button>
                    <Button variant="outlined" onClick={handleSignUpOpen}>Try Visualizer for Free</Button>
                </div>
            }
            <DialogComp isSignUpOpen={isSignUpOpen} onClick={handleCloseSignUp}/>
            <DialogCompSignIn isSigInOpen={isSignInOpen} handleSignIn={handleSignIn} handleClose={handleCloseSignIn}/>
        </div>
    );
};

export default Header;
