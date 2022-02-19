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
                flex: "1",
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
                            <Link to="/birthday-app/" className='navbar-brand'>
                                Birthday Calendar App [wip]
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