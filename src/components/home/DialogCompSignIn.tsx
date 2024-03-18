import React, {useState} from "react";
import './DialogCompSignIn.css';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";


interface DialogCompSignInProps {
    isSigInOpen: boolean,
    handleClose: () => void,
    handleSignIn: () => void,
}

const DialogCompSignIn:React.FC<DialogCompSignInProps> = (props:DialogCompSignInProps) => {
    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: ""

    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserCredentials(prevUserCredentials => ({
            ...prevUserCredentials,
            [name]: value
        }));
        console.log(userCredentials)
    };

    const handleSignIn = () => {
        const apiUrl = "http://127.0.0.1:7071/user/signin";
        console.log(userCredentials)
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCredentials),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                if (response.headers.get("Content-Type")?.includes("text")) {
                    props.handleSignIn();
                    props.handleClose();
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };


    return(
        <div>
            <Dialog open={props.isSigInOpen} onClose={props.handleClose} className={"custom-dialog-paper"}>
                <DialogTitle className={"custom-dialog-content"}>Sign In</DialogTitle>
                <DialogContent className={"custom-dialog-content"}>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email"
                        type="text"
                        fullWidth
                        name="email"
                        value={userCredentials.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        label="Password"
                        type="password"
                        fullWidth
                        name="password"
                        value={userCredentials.password}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions className={"custom-dialog-content"}>
                    <Button onClick={handleSignIn} color="primary" className={"sign-in-comp-btn"}>Sign In</Button>
                    <Button onClick={props.handleClose} color="secondary" className={"cancel-btn"}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DialogCompSignIn;