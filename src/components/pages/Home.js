import {useEffect, useState} from "react";
import "./Home.css"
import {Link} from "react-router-dom";
import {BsPlusCircleFill} from "react-icons/bs";
import * as React from 'react';
import Layout from "../templates/layout";
import ToDoList from "../templates/toDoList";
import axios from "axios";

export default function Home() {

    const today = JSON.stringify(new Date()).slice(1,11)
    const [data, setData] = useState([]);

    useEffect(() => {
        try {
            axios.get("http://localhost:5000/api/toDoLists")
                .then((response) => {
                    setData(response.data.data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
        catch (error) {
            console.log(error)
        }
    }, [data]);


  return (
      <div className={"display"}>
          <Layout/>
          <div className={"boxList"}>
              <article>
                  <ToDoList boxheader={"To day"} data={data.filter(value => value.date === today).map(data => data)}/>
              </article>
              <article>
                  <ToDoList boxheader={"Unsuccessful"} data={data.filter(value => (value.date !== today && !value.success)).map(data => data)}/>
              </article>
              <article>
                  <ToDoList boxheader={"Successful"} data={data.filter(value => (value.date !== today && value.success)).map(data => data)}/>
              </article>
          </div>
          <aside className={"add"}>
            <Link to="/AddToDoList.js">
                <BsPlusCircleFill color="#4CBB17" size={38}/>
            </Link>
          </aside>
      </div>
  )
}