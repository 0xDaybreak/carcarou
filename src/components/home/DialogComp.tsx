import React, {useState} from "react";
import {Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button} from "@mui/material";
import './DialogComp.css';

interface DialogCompProps {
    open: boolean,
    onClick: () => void,
}

const DialogComp: React.FC<DialogCompProps> = (props) => {
    const [user, setUser] = useState({
        id: 0,
        email: "",
        firstname: "",
        lastname: "",
        password_hash: "",
        phone_number: ""

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
            .then(() => {
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
                    name="firstname"
                    value={user.firstname}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Last Name"
                    type="text"
                    fullWidth
                    name="lastname"
                    value={user.lastname}
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
                    name="password_hash"
                    value={user.password_hash}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions className={"custom-dialog-content"}>
                <Button onClick={props.onClick} color="secondary" className={"cancel-btn"}>Cancel</Button>
                <Button onClick={handleConfirmSignUpClick} color="primary" className={"sign-up-btn"}>Sign Up</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogComp;
