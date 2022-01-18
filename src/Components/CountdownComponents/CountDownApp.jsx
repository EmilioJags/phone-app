import React, { Component } from 'react';
import logo from '../../Resources/snow-dog.jpg'
import AppendHead from 'react-append-head';

const countdownStyle = {
    "display": "flex",
    "flex-wrap": "wrap"
}

const h1Style = {
    "font-weight": "normal",
    "font-size": "4rem",
    "margin-left": "6.3rem"
}
const topStyle = {
    "background-image": "../../Resources/snow-dog.jpg",
    "background-size": "cover",
    "background-position": "center center",
    "display": "flex",
    "flex-direction": "column",
    "align-items": "center",
    "min-height": "100vh",
    "font-family": "'Poppins', sans-serif",
    "margin": "0"
}

const countdownElStyle = {
    "textAlign": "center"
}

const containerStyle = {
    "display": "flex",
    "flex-wrap": "wrap"
}
const bigTextStyle = {
    "font-weight": "bold",
    "font-size": "2rem",
    "line-height": "1",
    "margin": "0 2 rem"
}

class CountDownApp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.countdown = this.countdown.bind(this);
        this.formatTime = this.formatTime.bind(this);

    }
    countdown() {
        const days = document.getElementById("days");
        const hours = document.getElementById("hours");
        const mins = document.getElementById("minutes");
        const seconds = document.getElementById("seconds");

        const currentYear = new Date().getFullYear();
        const newYears = "1 Jan " + (currentYear + 1);
        const remainingSeconds = (new Date(newYears) - new Date()) / 1000;

        const daysE = Math.floor(remainingSeconds / 3600 / 24);

        const hoursE = Math.floor(remainingSeconds / 3600) % 24;

        const minutesE = Math.floor(remainingSeconds / 60) % 60;

        const secondsE = Math.floor(remainingSeconds % 60);

        days.innerHTML = this.formatTime(daysE);
        hours.innerHTML = this.formatTime(hoursE);
        mins.innerHTML = this.formatTime(minutesE);
        seconds.innerHTML = this.formatTime(secondsE);
    }
    formatTime(time) {
        return time < 10 ? "0" + time : time;
    }
    componentDidMount() {
        setInterval(() => {
            this.countdown();
        }, 1500);
    }

    render() {
        return (
            <div style={{
                display: "flex", margin: "0", minHeight: "100vh", flexDirection: "column", backgroundPosition: "center center",
                backgroundImage: `url(${logo})`, backgroundSize: "cover", alignItems: "center"
            }} >

                <h1 style={h1Style}>New Years Eve will come soon!</h1>

                <div style={containerStyle} className="countdown-container">
                    <div style={countdownElStyle} className="countdown-el days-c">
                        <p style={bigTextStyle} className="big-text" id="days">0</p>
                        <span style={{ fontSize: "1.5rem", margin: "5px" }}>days</span>
                    </div>
                    <div style={countdownElStyle} className="countdown-el hours-c">
                        <p style={bigTextStyle} className="big-text" id="hours">0</p>
                        <span style={{ fontSize: "1.5rem", margin: "5px" }}>hours</span>
                    </div>
                    <div style={countdownElStyle} className="countdown-el minutes-c">
                        <p style={bigTextStyle} className="big-text" id="minutes">0</p>
                        <span style={{ fontSize: "1.5rem", margin: "5px" }}>mins</span>
                    </div>
                    <div style={countdownElStyle} className="countdown-el seconds-c">
                        <p style={bigTextStyle} className="big-text" id="seconds">0</p>
                        <span style={{ fontSize: "1.5rem", margin: "5px" }}>seconds</span>
                    </div>
                </div>
            </div >
        );
    }

}
export default CountDownApp;