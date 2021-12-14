import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <header>

                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className='container'>
                            <a href='http://localhost:3000/listatelefono' className='navbar-brand'>
                                Directorio
                            </a>
                        </div>
                        <div className='container'>
                            <a href='http://localhost:3000/agregar' className='navbar-brand'>
                                Agregar
                            </a>
                        </div>
                        <div className='container'>
                            <a href='http://localhost:3000/find-phones' className='navbar-brand'>
                                Buscar
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;