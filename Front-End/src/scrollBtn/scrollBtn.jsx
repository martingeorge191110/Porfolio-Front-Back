import React, { useEffect, useRef } from "react";
import './scrollBtn.css'


export default function ScrollBtn (props) {

    function scrBtnFunc () {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <button onClick={() => {scrBtnFunc()}} className="scrBtn">
                <span>{props.title}</span>
            </button>
        </>
    )
}