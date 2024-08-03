import React from 'react';
import './home.css'
import ScrollBtn from "../scrollBtn/scrollBtn";
import About from "../AboutS/about";


export default class Home extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            spanTemp: ""
        }
    }


    componentDidMount () {
        let introDiv = document.querySelector('.intro')
        let title = "Software Developer"
        let counter = 0
        let counter2 = title.length
        setInterval(() => {
            if(counter < title.length && counter2 === title.length) {
                this.setState({...this.state , spanTemp:this.state.spanTemp+title[counter]})  
                counter++
            } else if(counter === title.length && counter2 > 0 ) {
                this.setState({...this.state , spanTemp:this.state.spanTemp.slice(0,counter2-1)})
                counter2--
            } else if (counter === title.length && counter2 === 0) {
                counter = 0
                counter2 = title.length
            }
            }, 200);
        for(let i = 3 ; i < introDiv.children.length ; i++) {
            if(i%2 === 0) introDiv.children[i].style.color = "rgb(164, 97, 226)";
        }

        // fetch("http://localhost:4000/api/try")
        // .then(response => {

        //     if (!response.ok) {
        //         throw new Error('Network response was not ok yes was not okk');
        //     }
        //     return response.json();
        // })
        // .then(data => {

        //     console.log(data);
        // })
        // .catch(error => {

        //     console.error('Fetch error from catching:', error);
        // });
    }

    componentDidUpdate() {

    }


    render () {
        return (
            <>
            <ScrollBtn title = "About"/>
                <section className="home">
                    <div className="intro">
                        <p>Get every single solution</p>
                        <h1>I'm a <span className="spanTemp">{this.state.spanTemp}</span></h1>
                        <h1>Martin George</h1>
                        <p>Motivated by a fervent interest in technology,</p>
                        <p>I am a junior software engineering student at ALX Software Engineering program.</p>
                        <p>With a degree from Ain Shams University in business,</p>
                        <p>I am passionate about coding and eager to explore the intersection of business strategy and software development.</p>
                        <button>Learn More</button>
                        <ul className="social-icons">
                            <li><a href="#awd"><i className="fab fa-linkedin fa-2x"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                        </div>
                        <div className="homeImg">
                        <img src="https://raw.githubusercontent.com/judygab/web-dev-projects/42c815099332e69edcef4593d6f593224b94ba40/personal-portfolio/src/assets/img/header-img.svg" alt="" />
                        </div>
                        </section>
                <About/>
            </>
        )
    }
}