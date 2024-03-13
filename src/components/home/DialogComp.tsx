import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";
import './DialogComp.css';

interface DialogCompProps {
    open: boolean,
    onClick: () => void,
}

const DialogComp: React.FC<DialogCompProps> = (props) => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleConfirmSignUpClick = () => {
        const apiUrl = "http://127.0.0.1:7071/user/newuser";
        console.log(user)
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Handle successful response
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

    return (
        <Dialog open={props.open} onClose={props.onClick} className={"custom-dialog-paper"}>
            <DialogTitle className={"custom-dialog-content"}>Sign Up</DialogTitle>
            <DialogContent className={"custom-dialog-content"}>
                <TextField
                    autoFocus
                    margin="dense"
                    label="First Name"
                    type="text"
                    fullWidth
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Last Name"
                    type="text"
                    fullWidth
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Email Address"
                    type="email"
                    fullWidth
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Password"
                    type="password"
                    fullWidth
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions className={"custom-dialog-content"}>
                <Button onClick={props.onClick} color="secondary">Cancel</Button>
                <Button onClick={handleConfirmSignUpClick} color="primary">Sign Up</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogComp;
