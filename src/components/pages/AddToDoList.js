import './AddToDoList.css';
import {useState} from "react";
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker';
import {Link} from "react-router-dom";

function AddToDoList() {

    const [topic, setTopic] = useState();
    const [title, setTitle] = useState();
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState();
    const [location, setLocation] = useState();
    const handleSumbit = (event) => {
        event.preventDefault();
        console.log(topic, title, date, time, location)
    }

    return (
        <div className={"page"}>
            <div className={"background-create"}>
                <header>
                    <h1>Create to do list</h1>
                </header>
                <form className={"form-create"}>
                    <div>
                        <p htmlFor="topic">Topic: </p>
                        <input className={"input-text"} type="text" name="topic" id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} required/>
                    </div>
                    <div>
                        <p htmlFor="title">Title: </p>
                        <input className={"input-text"} type="text" name="Title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <p >Date: </p>
                        <DatePicker className={"pick"} label="Controlled picker" value={date} onChange={(date) => setDate(date)} clearIcon={null}/>
                    </div>
                    <div>
                        <p htmlFor="time">Time: </p>
                        <TimePicker className={"pick"} name="time" id="time" onChange={(time) => setTime(time)} value={time} clearIcon={null} />
                    </div>
                    <div>
                        <p htmlFor="location">Location: </p>
                        <input className={"input-text"} type="text" name="location" id="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                    </div>
                    <div className={"button-form"}>
                        <button type={"submit"} className={"a-button"} onClick={(event) => handleSumbit(event)}>Create</button>
                        <Link to="/"><button className={"a-button"}>back</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddToDoList;