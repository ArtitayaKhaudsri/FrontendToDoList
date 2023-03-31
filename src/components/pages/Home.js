import {BsJustify, BsPlusCircleFill} from 'react-icons/bs';
import './Home.css';
import { Link } from 'react-router-dom';
function Home() {

  return (
    <div className={"display"}>
      <header>
        <h1>To do list</h1>
      </header>
      <nav className={"button-site-bar"}>
         <BsJustify size={25}/>
      </nav>
      <aside className={"add"}>
          <Link to="/AddToDoList.js">
              <BsPlusCircleFill color="#000044" size={25}/>
          </Link>
      </aside>
    </div>
  );
}

export default Home;
