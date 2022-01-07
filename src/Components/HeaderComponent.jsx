import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.homePage = this.homePage.bind();
        this.addContact = this.addContact.bind();
    }

    addContact = (e) => {
        e.preventDefault();
        this.props.history.push("/agregar");
    }
    homePage = (e) => {
        e.preventDefault();
        this.props.history.push("/");
    }
    render() {
        return (
            <div style={{
                scrollMarginTop: "10px", overflow: "hidden",
                position: "fixed", left: "0", display: "inline-block",
                width: "100%", top: "0"
            }}>
                <header>

                    <nav className="style-scope ytd-masthead navbar navbar-expand-md navbar-fixed-top navbar-dark bg-dark" >
                        <div id='nas' className='container text-center'>
                            <Link to="/" className='navbar-brand'>
                                Phone Directory App</Link>
                        </div>
                        <div className='container'>
                            <Link to="/weather-app" className='navbar-brand'>
                                Weather App
                            </Link>
                        </div>

                        <div className='container'>
                            <Link to="/task-manager" className='navbar-brand'>
                                Task Manager App
                            </Link>
                        </div>

                        <div className='container'>
                            <Link to="/game-app" className='navbar-brand'>
                                Game App
                            </Link>
                        </div>

                    </nav>
                </header>
            </div >
        );
    }
}

export default HeaderComponent;