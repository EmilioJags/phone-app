import React, { Component } from 'react';
import logo from '../Resources/under_construction.png'

class WeatherComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <img src={logo}></img>
            </div>
        );
    }
}

export default WeatherComponent;
