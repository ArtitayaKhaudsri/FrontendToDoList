import "../../atomic/button/backButton.css"
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {AiOutlineExclamationCircle} from "react-icons/ai";
import React, {useState} from "react";
import DialogActions from "@mui/material/DialogActions";
import "./deleteButton.css"
import "./submit.css"
import axios from "axios";
export default function DeleteButton(props) {

    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = (event) => {
        event.preventDefault();
        setOpen(true)
    }

    const handleDelete = (event) => {
        event.preventDefault();
        try {
            axios.delete(`http://localhost:5000/api/toDoLists/${props.id}`)
                .then((response) => console.log(response))
                .catch((err) => {
                    console.log(err.message);
                });
            setOpen(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <button style={{backgroundColor:"red"}} className={"a-button"} onClick={(event) => handleOpen(event)}>Delete</button>
            <div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle className={"icon-status"}>
                        <AiOutlineExclamationCircle size={180} className={"icon-warn"}/>
                    </DialogTitle>
                    <DialogContent>
                        <label className={"status"}>Are you sure delete?</label>
                    </DialogContent>
                    <DialogActions>
                        <footer className={"position-button"}>
                            <div className={"chose-button"}>
                                <button style={{backgroundColor:"red"}} className={"a-button"} onClick={(event) => handleDelete(event)}>Delete</button>
                            </div>
                            <div className={"chose-button"}>
                                <button onClick={handleClose} className={"a-button"} style={{backgroundColor:"#006EBC"}}>Close</button>
                            </div>
                        </footer>
                    </DialogActions>
                </Dialog>
            </div>
        </div>

    )
}