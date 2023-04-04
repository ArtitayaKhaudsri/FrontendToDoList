import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import BackButton from "../../atomic/button/backButton";
import "../form/form.css";
import "./editButton.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Submit from "./submit";
export default function EditButton(props) {

    const [topic, setTopic] = useState(props.data.topic);
    const [title, setTitle] = useState(props.data.title);
    const [date, setDate] = useState(props.data.data);
    const [location, setLocation] = useState(props.data.location);

    const [editOpen, setEditOpen] = useState(false)

    const handleCloseEdit = (event) => {
        event.preventDefault();
        setEditOpen(false);
    };

    const handleEdit = (event) => {
        event.preventDefault();
        setEditOpen(true);
    }

    return (
        <>
            <button style={{backgroundColor:"#000044"}} className={"a-button"} onClick={(event) => handleEdit(event)}>Edit</button>
            <div>
                <Dialog open={editOpen} onClose={handleCloseEdit}>
                    <DialogTitle>
                        <h1 className={"header-edit"}>Edit to do list</h1>
                    </DialogTitle>
                    <DialogContent>
                        <Box component="form" className={"form-create"}>
                            <div>
                                <TextField required sx={{my: 1}} id="outlined-required" label="Topic" defaultValue={topic} value={topic} className={"input-text"} onChange={(e) => setTopic(e.target.value)}/>
                                <TextField id="outlined-required" label="Title" className={"input-text"} value={title} defaultValue={title} onChange={(e) => setTitle(e.target.value)}/>
                                <TextField sx={{my: 1}} disabled id='outlined-disabled' label="date" defaultValue={props.data.date} value={props.data.date} style={{width:"100%"}}/>
                                <TextField id="outlined-required" label="Location" value={location} defaultValue={location} className={"input-text"} onChange={(e) => setLocation(e.target.value)}/>
                            </div>
                            <div className={"position-button"}>
                                <div className={"button-form"}>
                                    <Submit topic={topic} title={title} date={date} location={location} id={props.data.id} type={"Edit"}/>
                                </div>
                                <div onClick={(event) => handleCloseEdit(event)} className={"button-form"}>
                                    <BackButton/>
                                </div>
                            </div>
                        </Box>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}