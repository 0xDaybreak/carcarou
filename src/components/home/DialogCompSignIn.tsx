import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";


interface DialogCompSignInProps {
    isSigInOpen: boolean,
    handleClose: () => void,
}

const DialogCompSignIn:React.FC<DialogCompSignInProps> = (props:DialogCompSignInProps) => {
    return(
        <div>
            <Dialog open={props.isSigInOpen} onClose={props.handleClose} className={"custom-dialog-paper"}>
                <DialogTitle className={"custom-dialog-content"}>Sign In</DialogTitle>
                <DialogActions className={"custom-dialog-content"}>
                    <Button onClick={props.handleClose} color="secondary" className={"cancel-btn"}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DialogCompSignIn;