import {BsJustify, BsJustifyLeft} from 'react-icons/bs';
import './layout.css';
import {useState} from "react";

export default function Layout() {

    const [open, setOpen] = useState(false)
    const menu = () => {
        if (open) {
            return (
                <div>
                    <BsJustifyLeft size={28}/>
                </div>

            )

        } else {
            return <BsJustify size={28}/>
        }
    }

    return (
        <div>
            <header>
                <h1>To do list</h1>
            </header>
            <nav className={"button-site-bar"} onClick={() => setOpen(!open)}>
                {menu()}
            </nav>
        </div>
    );
}