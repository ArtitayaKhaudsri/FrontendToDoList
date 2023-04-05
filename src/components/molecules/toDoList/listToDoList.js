import {BsCheckSquareFill, BsChevronCompactDown, BsChevronCompactUp} from "react-icons/bs";
import {FaWindowClose} from "react-icons/fa";
import {useState} from "react";
import DetailToDoList from "../../Organisms/showDetail/detailToDoList";
import Collapse from "@mui/material/Collapse";
import {FiCheckSquare, FiSquare} from "react-icons/fi"
import "./listToDoList.css"

export default function ListToDoList(props) {

    const [open, setOpen] = useState(false);

    const handleOpen = (event) => {
        event.preventDefault();
        setOpen(!open)
    }

    const handleButtonCheckList = (id) => {
        try {
            fetch(`http://localhost:5000/api/editStatusToDoList/${id}`)
                .then((response) => response.json())
                .catch((err) => {
                    console.log(err.message);
                });
        }
        catch (error) {
            return <label>Sorry can't connect Database</label>
        }
    }

    const onCheckList = () => {
        if (props.data.success) {
            return "completed"
        } else {
            return "unsuccess"
        }
    }

    const iconStatus = (status) => {
        if (status) {
            return <BsCheckSquareFill color={"#3BB143"}/>
        } else {
            return <FaWindowClose color={"red"}/>
        }
    }

    const iconDetail = () => {
        if (open) {
            return <BsChevronCompactUp/>
        } else {
            return <BsChevronCompactDown/>
        }
    }

    const moreDetail = () => {
        if (open) {
            return (
                <td className={"detail"} colSpan={3}>
                    <Collapse in={open} timeout="auto" unmountOnExit className={"detail-box"}>
                        <DetailToDoList data={props.data}/>
                    </Collapse>
                </td>
            )
        }
    }

    const iconCheckList = () => {
        if (props.data.success) {
            return <FiCheckSquare onClick={() => handleButtonCheckList(props.data.id)}/>
        } else {
            return <FiSquare onClick={() => handleButtonCheckList(props.data.id)}/>
        }
    }

    return (
        <>
            <tr className={"col"}>
                <td>
                    {iconCheckList()}
                    <label className={onCheckList()}>{props.data.topic}</label>
                </td>
                <td className={"icon"}>{iconStatus(props.data.success)}</td>
                <td className={"icon"} onClick={(event) => handleOpen(event)}>{iconDetail()}</td>
            </tr>
            <tr>
                {moreDetail()}
            </tr>
        </>
    )
}