import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Submit from "../button/submit";
import {Link} from "react-router-dom";
import BackButton from "../../atomic/button/backButton";
import Box from "@mui/material/Box";
import React, {useState} from "react";
import "./form.css"
export default function FormCreate() {

    const [topic, setTopic] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date());
    const [location, setLocation] = useState('');

    return (
        <Box component="form" className={"form-create"}>
            <div>
                <TextField required sx={{my: 1}} id="outlined-required" label="Topic" value={topic} className={"input-text"} onChange={(e) => setTopic(e.target.value)}/>
                <TextField id="outlined-required" label="Title" className={"input-text"} value={title} onChange={(e) => setTitle(e.target.value)}/>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker className={"input-text"} label="Date" defaultValue={dayjs(date)} onChange={(newValue) => setDate(newValue['$d'])}/>
                    </DemoContainer>
                </LocalizationProvider>
                <TextField sx={{my: 1}} id="outlined-required" label="Location" value={location} className={"input-text"} onChange={(e) => setLocation(e.target.value)}/>
            </div>
            <div className={"position-button"}>
                <div className={"button-form"}>
                    <Submit topic={topic} title={title} date={JSON.stringify(date).slice(1, 11)} location={location} type={"Create"}/>
                </div>
                <div className={"button-form"}>
                    <Link to="/"><BackButton text={"Back"} color={"#000044"}/></Link>
                </div>
            </div>
        </Box>
    )
}