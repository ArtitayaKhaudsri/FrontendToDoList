import ListToDoList from "../molecules/toDoList/listToDoList";
import * as React from "react";
import "./toDoList.css";
export default function toDoList(props) {

    return (
        <div className={"list"}>
            <header className={"day"}>
                <h2>{props.boxheader}</h2>
            </header>
            <table>
                <tr>
                    <th width={"310px"}>Topic</th>
                    <th>status</th>
                    <th></th>
                </tr>
                {props.data.map(data =>
                    <ListToDoList data={data}/>
                )}
            </table>
        </div>
    )
}