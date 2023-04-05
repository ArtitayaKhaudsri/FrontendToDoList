import './AddToDoList.css';
import React from "react";
import FormCreate from "../Organisms/form/formCreate"
export default function AddToDoList() {

    return (
        <div className={"page"}>
            <div className={"background-create"}>
                <header>
                    <h1>Create to do list</h1>
                </header>
                <FormCreate/>
            </div>
        </div>
    )

}
