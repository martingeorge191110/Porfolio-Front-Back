import React, { useState, useRef, useEffect } from "react";
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Input from "./inputs";

export default function Contact() {
    const inputsDiv = useRef(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const inputsDivChildren = inputsDiv.current.children;
        for (let i = 0; i < inputsDivChildren.length - 1; i++) {
            if (i === 3) {
                inputsDivChildren[i].style.cssText = `
                    text-align: left;
                    padding: 3rem 1.5rem;
                    border: none;
                    border-bottom: 1px solid rgb(218, 180, 254);
                    background-color: black;
                    color: white;
                    width: 80%;
                    font-size: 16px;
                    outline: none;
                    transition: border-color 0.3s;
                `;
            } else {
                inputsDivChildren[i].style.cssText = `
                    text-align: left;
                    padding: 1.5rem;
                    border: none;
                    border-bottom: 1px solid rgb(218, 180, 254);
                    background-color: black;
                    color: white;
                    width: 80%;
                    font-size: 16px;
                    outline: none;
                    transition: border-color 0.3s;
                `;
            }
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:4000/api/contact/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, phone, message }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Response from server:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <section className="contact">
                <div className="details">
                    <h1>Contact Me Now</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quam veritatis, fugiat doloremque alias ullam aperiam voluptate necessitatibus est. Nam asperiores autem ipsum mollitia eius dicta dignissimos culpa ipsam rerum.</p>
                    <p>Telephone Number : <span>+20 1276028978</span></p>
                    <ul>
                        <li><FontAwesomeIcon icon={faLinkedin} /> : <span>Linked In Account</span></li>
                        <li><FontAwesomeIcon icon={faGithub} /> : <span>Github Account</span></li>
                        <li><FontAwesomeIcon icon={faGoogle} /> : <span>Gmail Address</span></li>
                    </ul>
                </div>
                <div ref={inputsDiv} className="inputs">
                    <Input type="text" placeholder="Customer Name" value={name} onChange={setName} />
                    <Input type="email" placeholder="Customer Email" value={email} onChange={setEmail} />
                    <Input type="number" placeholder="Phone Number" value={phone} onChange={setPhone} />
                    <Input type="text" placeholder="Message" value={message} onChange={setMessage} />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </section>
        </>
    );
}
