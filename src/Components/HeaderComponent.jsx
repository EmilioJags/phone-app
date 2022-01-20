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
                            <Link to="/weather-app/" className='navbar-brand'>
                                Weather App [wip]
                            </Link>
                        </div>

                        <div className='container'>
                            <Link to="/task-manager/" className='navbar-brand'>
                                Task Manager App [wip]
                            </Link>
                        </div>

                        <div className='container'>
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">

                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <a className="dropdown-item" href="/">Dropdown a</a>
                                        <a className="dropdown-item" href="#">Dropdown b</a>
                                    </div>
                                </div>
                            </div>
                            <Link to="/game-app/" className='navbar-brand'>
                                Game App [wip]
                            </Link>
                        </div>

                        <div className='container'>
                            <Link to="/data-analysis/" className='navbar-brand'>
                                Data Analysis App [wip]
                            </Link>
                        </div>
                        <div className='container'>
                            <Link to="/countdown-app/" className='navbar-brand'>
                                Countdown App
                            </Link>
                        </div>

                    </nav>
                </header>
            </div >
        );
    }
}

export default HeaderComponent;