import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import React from "react";
import './DialogComp.css';

interface DialogCompProps {
    open: boolean,
    onClick: () => void,

    onSignup: () => void,
}


const DialogComp:React.FC<DialogCompProps> = (props) => {
    return(
        <Dialog open={props.open} onClose={props.onClick} className={"custom-dialog-paper"}>
            <DialogTitle className={"custom-dialog-content"}>Sign Up</DialogTitle>
            <DialogContent className={"custom-dialog-content"}>
                <TextField autoFocus margin="dense" label="First Name" type="text" fullWidth/>
                <TextField autoFocus margin="dense" label="Last Name" type="text" fullWidth/>
                <TextField margin="dense" label="Email Address" type="email" fullWidth />
                <TextField margin="dense" label="Password" type="password" fullWidth/>
            </DialogContent>
            <DialogActions className={"custom-dialog-content"}>
                <Button onClick={props.onClick} color="secondary">Cancel</Button>
                <Button onClick={props.onSignup} color="primary">Sign Up</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogComp;