import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {BsCheckCircle} from "react-icons/bs"
import { IoIosCloseCircleOutline } from "react-icons/io";
import {useState} from "react";
import "./submit.css"
import '../../atomic/button/backButton.css'
import axios from "axios";

export default function Submit(props) {

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('')

    const handleErrorOpen = () => {
        setError(true);
    };
    const handleErrorClose = () => {
        setError(false);
    };

    const handleSuccessOpen = () => {
        setSuccess(true);
    };
    const handleSuccessClose = () => {
        setSuccess(false);
    };

    const handleSumbit = (event) => {
        event.preventDefault();
        if (props.topic === '') {
            handleErrorOpen()
        } else {
            if (props.type === "Create") {
                console.log(props.type, props.topic, props.date, props.title, props.location)
                try {
                    axios.post(`http://localhost:5000/api/addToDoList`, {
                        topic: props.topic,
                        title: props.title,
                        date: props.date,
                        location: props.location,
                        })
                        .then((response) => setMessage(response.data.message))
                        .catch((err) => {
                            console.log(err.message);
                        });
                    handleSuccessOpen()
                } catch (error) {
                    console.log(error)
                }
            } else if (props.type === "Edit") {
                try {
                    axios.post(`http://localhost:5000/api/editToDoList/${props.id}`, {
                            topic: props.topic,
                            title: props.title,
                            date: props.date,
                            location: props.location,
                        })
                        .then((response) => setMessage(response.data.message))
                        .catch((err) => {
                            console.log(err.message);
                        });
                    handleSuccessOpen()
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }

    return (
        <>
            <button type={"submit"} className={"a-button"} style={{backgroundColor:"#4CBB17"}} onClick={(event) => handleSumbit(event)}>{props.type}</button>
            <div>
                <Dialog open={error} onClose={handleErrorClose} className={"area"}>
                    <DialogTitle className={"icon-status"}>
                        <IoIosCloseCircleOutline size={180} color={"red"}/>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <label className={"status"}>Please input topic for to do list</label>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <footer className={"position-button"}>
                            <button onClick={handleErrorClose} className={"a-button"} style={{backgroundColor:"#006EBC"}}>Close</button>
                        </footer>
                    </DialogActions>
                </Dialog>
            </div>
            <div>
                <Dialog open={success} onClose={handleSuccessClose} className={"area"}>
                    <DialogTitle>
                        <header className={"icon-status"}>
                            <BsCheckCircle size={150} color={"#3BB143"}/>
                        </header>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <label className={"status"}>{message}</label>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions >
                        <footer className={"position-button"}>
                            <button onClick={handleSuccessClose} className={"a-button"} style={{backgroundColor:"#006EBC"}}>Close</button>
                        </footer>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}