import React, { useEffect, useRef } from "react";
import './portfolio.css'
import Tab from "./tab";
import { InputGroup } from "react-bootstrap";


export default function Portfolio () {


    const changeTabsList = useRef(null)

    useEffect(() => {
        let changeBorderDirection;
        const children = changeTabsList.current.children
        for(let i = 0 ; i < changeTabsList.current.children.length ; i++) {
            if(i === 0 ) {changeBorderDirection = '20px 0 0 20px'}
            else if (i === 2) {changeBorderDirection = '0 20px 20px 0'}
            else continue
            children[i].children[0].style.borderRadius = changeBorderDirection;
        }
    } , [])


    return (
        <>
        <section className="portfolio">
            <h1>My Projects</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, voluptatibus provident ipsa dolorem nesciunt assumenda, aliquid vero repellendus officia deserunt, sit iusto molestias laborum. Laudantium, blanditiis? Assumenda autem impedit in!</p>
            <ul className="changeTabs" ref={changeTabsList}>
                <li><a href="#">Tab One</a></li>
                <li><a href="#">Tab Two</a></li>
                <li><a href="#">Tab Three</a></li>
            </ul>
            <ul className="tabs">
                <Tab/>
                <Tab/>
                <Tab/>
            </ul>
        </section>
        </>
    )
}