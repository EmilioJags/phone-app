import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                            <a href='http://192.168.100.11:3000/listatelefono' className='navbar-brand'>
                                Directorio
                            </a>
                        </div>
                        <div className='container'>
                            <a href='http://192.168.100.11:3000/agregar' className='navbar-brand'>
                                Agregar
                            </a>
                        </div>

                    </nav>
                </header>
            </div >
        );
    }
}

export default HeaderComponent;