import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AddToDoList from "./components/pages/AddToDoList";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/AddToDoList.js" element={<AddToDoList/>} />
            </Routes>
        </div>
    );
}