import React from "react";
import './services.css'
import ScrollBtn from "../scrollBtn/scrollBtn";
import Skills from "./skills/skills";

export default function Services () {





    return (
        <>
        <ScrollBtn title = "Skills"/>
        <section className="services">
            <h1>Services</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis maiores placeat dolorem et, molestias qui aut quaerat tempora reiciendis. Ut placeat molestiae reiciendis amet. Repudiandae ratione error ad voluptatem.</p>
            <div className="container">
                <div className="front">
                    <div className="spans">
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>Java Script</span>
                        <span>React.JS</span>
                        <span>Redux</span>
                        <span>ReactBootstrap</span>
                    </div>
                    <div className="serveTitle">
                        Front End
                    </div>
                </div>
                <div className="back">
                <div className="serveTitle">
                        Back End
                </div>
                    <div className="spans">
                        <span>Node.JS</span>
                        <span>Express.JS</span>
                        <span>Java Script</span>
                        <span>SQL</span>
                    </div>
                </div>
            </div>
        </section>
        <Skills/>
        </>
    )
}