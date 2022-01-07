import React, { Component } from 'react';
import logo from '../../Resources/snow-dog.jpg'

const countdownStyle = {
    "display": "flex",
    "flex-wrap": "wrap"
}

const h1Style = {
    "font-weight": "normal",
    "font-size": "4rem",
    "margin-left": "6.3rem",
    "margin-top": "13rem"
}
const topStyle = {
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
    "text-align": "center",
    "font-size": "1.5rem"
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
        this.state = {}
    }



    render() {
        return (
            <div style={topStyle}>
                <h1 style={h1Style}>New Years Eve!</h1>

                <div className="countdown-container" style={countdownStyle}>
                    <div className="countdown-el days-c" style={countdownElStyle}>
                        <p class="big-text" id="days" style={bigTextStyle}>0</p>
                        <span>days</span>
                    </div>
                    <div className="countdown-el hours-c" style={countdownElStyle}>
                        <p className="big-text" id="hours" style={bigTextStyle}>0</p>
                        <span>hours</span>
                    </div>
                    <div className="countdown-el minutes-c" style={countdownElStyle}>
                        <p className="big-text" id="minutes" style={bigTextStyle}>0</p>
                        <span>mins</span>
                    </div>
                    <div className="countdown-el seconds-c" style={countdownElStyle}>
                        <p className="big-text" id="seconds" style={bigTextStyle}>0</p>
                        <span>seconds</span>
                    </div>
                </div>
            </div >
        );
    }

}
export default CountDownApp;