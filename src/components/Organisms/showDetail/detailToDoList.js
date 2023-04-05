import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EditButton from "../button/editButton";
import DeleteButton from "../button/deleteButton";
import "./detailToDoList.css"

export default function DetailToDoList(props) {

    return (
        <Box component="form">
            <article >
                <TextField sx={{my: 1}} disabled id='outlined-disabled' label="title" defaultValue={props.data.title} value={props.data.title} style={{width:"100%"}} />
                <TextField sx={{my: 1}} disabled id='outlined-disabled' label="date" defaultValue={props.data.date} value={props.data.date} style={{width: "100%"}}/>
                <TextField sx={{my: 1}} disabled id='outlined-disabled' label="location" defaultValue={props.data.location} value={props.data.location} style={{width: "100%"}}/>
            </article>
            <footer className={"position-button"}>
                <div className={"button-form"}>
                    <EditButton data={props.data}/>
                </div>
                <div className={"button-form"}>
                     <DeleteButton id={props.data.id}/>
                </div>
            </footer>
        </Box>
    )
}