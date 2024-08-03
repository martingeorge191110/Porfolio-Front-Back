import React, { useEffect, useRef } from "react";
import './skills.css'

export default function Skills () {

    const listElementsSoft = useRef(null)
    const listElementsTech = useRef(null) 

    useEffect(() => {
        const arr = [listElementsSoft , listElementsTech]
        arr.forEach((list) => 
            {for(let i = 0; i < list.current.children.length ;i++) {
                if(i%2 === 0){
                    list.current.children[i].style.background = "linear-gradient( to right, rgb(164, 97, 226) 0%, rgba(0, 0, 0, 0) 70%)"
                } else {
                    list.current.children[i].style.background = "linear-gradient( to left, rgb(164, 97, 226) 0%, rgba(0, 0, 0, 0) 70%)"
                    list.current.children[i].style.textAlign = "right"
                }}}
        
        )
    } , [])

    return (
        <>
        <section className="skills">
            <h1>Skills</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eligendi maiores nobis. Numquam iure aperiam ad aliquam saepe </p>
            <div className="container">
                <div className="soft">
                    <h1>Soft Skills</h1>
                    <ul ref={listElementsSoft}>
                        <li>Problem Solving</li>
                        <li>Keep Learning</li>
                        <li>Good Communication</li>
                    </ul>
                </div>
                <div className="tech">
                    <h1>Technical Skills</h1>
                    <ul ref={listElementsTech}>
                        <li>Operating System & Linux</li>
                        <li>DS & ALG</li>
                        <li>Agile Network</li>
                        <li>Git&GitHub</li>
                        <li>Data Base MS</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}