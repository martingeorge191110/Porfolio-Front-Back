import React , {useRef , useState , useEffect} from "react";
import './navBar.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import Cursor from "../cursor/cursor";

export default function NavBar () {

  

    useEffect (() => {
        
    },[])

    return (
        <><nav>
        <h1><img src="https://designwithred.com/wp-content/uploads/2018/04/m3.png"></img>artin Portfolio</h1>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/services">Service</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
    </>
    )
}