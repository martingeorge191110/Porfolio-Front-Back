import React , {useEffect, useRef, useState} from "react";
import './cursor.css'


export default function Cursor () {

    const cursorRef = useRef(null)

    useEffect(() => {
        window.onmousemove = (e) => {
            cursorRef.current.style.top = e.pageY  + 'px'
            cursorRef.current.style.left = e.pageX + 'px'
        }
        const elementsArrayAccepted = [document.querySelectorAll('a') , document.querySelectorAll('button') , ]
        elementsArrayAccepted.forEach((ele) => {
            ele.forEach((e) => {
                e.onmouseenter = () => {cursorRef.current.classList.add('activeCursor')}
                e.onmouseleave = () => {cursorRef.current.classList.remove('activeCursor')}
            })
        })
        const elementsArrayRejected = ['h1','h2','h3','h4','h5','p']
        
        for(let i = 0 ; i < elementsArrayRejected.length ; i++) {
            document.querySelectorAll(`${elementsArrayRejected[i]}`).forEach((e) => {
                e.onmouseenter = () => {cursorRef.current.classList.add("idleCursor")}
                e.onmouseleave = () => {cursorRef.current.classList.remove("idleCursor")}
            })
        }
    } , [])

    return (
        <div className="cursor" ref={cursorRef}>

        </div>
    )
}