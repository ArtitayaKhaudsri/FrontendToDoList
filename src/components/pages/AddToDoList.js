import './AddToDoList.css';
import React, {useState} from "react";
import {Link} from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {DemoContainer, DemoItem} from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
export default function AddToDoList() {

    const [topic, setTopic] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date());
    const [location, setLocation] = useState('');

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSumbit = (event) => {
        event.preventDefault();
        console.log(topic, title, date, location);
        if (topic === '') {
            handleClickOpen()
        } else {
            try {
                const dateFormat = JSON.stringify(date).slice(1,11)
                fetch('http://localhost:5000/api/addToDoList', {
                    method: 'POST',
                    body: JSON.stringify({
                        topic: topic,
                        title: title,
                        date: dateFormat,
                        location: location,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        setTopic('');
                        setTitle('');
                        setDate(new Date());
                        setLocation('');
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div className={"page"}>
            <div className={"background-create"}>
                <header>
                    <h1>Create to do list</h1>
                </header>
                <Box component="form" className={"form-create"}>
                    <TextField required sx={{my: 1}} id="outlined-required" label="Topic" value={topic} className={"input-text"} onChange={(e) => setTopic(e.target.value)}/>
                    <TextField id="outlined-required" label="Title" className={"input-text"} value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker className={"input-text"} label="Date" defaultValue={dayjs(date)} onChange={(newValue) => setDate(newValue['$d'])}/>
                        </DemoContainer>
                    </LocalizationProvider>
                    <TextField sx={{my: 1}} id="outlined-required" label="Location" value={location} className={"input-text"} onChange={(e) => setLocation(e.target.value)}/>
                    <div className={"button-form"}>
                        <button type={"submit"} className={"a-button"} style={{backgroundColor:"#3BB143"}} onClick={(event) => handleSumbit(event)}>Create</button>
                        <Link to="/"><button className={"a-button"} style={{backgroundColor:"#000044"}}>Back</button></Link>
                    </div>
                </Box>
            </div>
            <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Error"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please input password for create to do list
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
            </div>
        </div>
    )
}
