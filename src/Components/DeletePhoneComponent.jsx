import React, { Component } from 'react'
import PhoneService from '../Services/PhoneService';

export default class DeletePhoneComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = { id: null }
        this.removeSelection = this.removeSelection.bind(this);
    }

    removeSelection = (e) => {
        if (PhoneService.deleteContact(this.props.contactId)) {
            alert("Contacto borrado!")
            this.setState({})
        }

    }
    render() {
        return (
            <div>
                <button onClick={this.removeSelection} style={{ margin: "10px", justifyItems: "center" }}
                    className='btn btn-danger' >
                    Borrar
                </button>
            </div>
        )
    }
}
