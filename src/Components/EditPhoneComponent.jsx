import React, { Component } from 'react'

export default class EditPhoneComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { id: null }
        this.updateContact = this.updateContact.bind(this);
    }

    updateContact = (e) => {
        alert(this.props.props.id)
    }

    render() {
        return (
            <div>
                <button
                    style={{ margin: "10px", justifyItems: "center" }}
                    className='btn btn-info'
                    onClick={this.updateContact}>
                    Modificar [{this.props.contactId}]</button>
            </div>
        )
    }
}
