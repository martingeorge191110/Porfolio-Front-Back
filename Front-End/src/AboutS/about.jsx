import React from "react";
import './about.css'

export default function About () {



    return (
        <>
        <section class="about-section">
        <h1 class="about-title">About Me</h1>
        <div class="container">
            <div class="about-content">
                <h3>Software Developer</h3>
                <p>
                    I am a dedicated Software Developer with a strong background in Linux (mainly Ubuntu) and a profound understanding of Operating Systems. My expertise includes C++ programming, Object-Oriented Programming (OOP), Data Structures, and Algorithms.
                </p>
                <p>
                    I am proficient in modern web development technologies such as React.js and JavaScript, and I have experience with Jest for unit testing. Additionally, I have solid skills in SQL Server, Git & GitHub, and Redux.
                </p>
                <p>
                    I graduated from the Business Faculty at Ain Shams University and am currently a student in the ALX Software Engineering program. I have also completed the ALX Foundation program, further enhancing my technical and professional skills.
                </p>
                <ul class="skills-list">
                    <li>Linux (Ubuntu)</li>
                    <li>Operating Systems</li>
                    <li>C++</li>
                    <li>OOP</li>
                    <li>Data Structures & Algorithms</li>
                    <li>React.js</li>
                    <li>JavaScript</li>
                    <li>Jest</li>
                    <li>SQL Server</li>
                    <li>Git & GitHub</li>
                    <li>Redux</li>
                </ul>
            </div>
            <div className="reactImg">
                {/* <img src="./side-shot-code-editor-using-react-js.jpg" alt="" /> */}
            </div>
        </div>
    </section>
        </>
    )
}